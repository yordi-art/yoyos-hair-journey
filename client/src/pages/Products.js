import { useEffect, useState } from 'react';
import API from '../api';

const CATEGORIES = ['All', 'Growth', 'Strengthening', 'Repair', 'Moisture', 'Shine', 'Styling', 'Combo'];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [popup, setPopup] = useState(null); // selected product for order
  const [form, setForm] = useState({ name: '', phone: '', quantity: 1 });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    API.get('/products').then((r) => setProducts(r.data)).catch(() => {});
  }, []);

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.ingredients.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || p.category === category;
    return matchSearch && matchCat;
  });

  const openPopup = (product) => {
    setPopup(product);
    setForm({ name: '', phone: '', quantity: 1 });
    setStatus(null);
  };

  const closePopup = () => { setPopup(null); setStatus(null); };

  const handleOrder = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await API.post('/orders', { ...form, product: popup._id });
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const total = popup ? (popup.price * form.quantity).toFixed(2) : 0;

  return (
    <div className="page">
      <h2 className="section-title">Our Hair Oils</h2>

      {/* Search & Filter */}
      <div className="products-toolbar">
        <input
          className="search-input"
          placeholder="🔍 Search products or ingredients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-tabs">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-tab${category === c ? ' active' : ''}`}
              onClick={() => setCategory(c)}
            >{c}</button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999', marginTop: '2rem' }}>No products found.</p>
      ) : (
        <div className="card-grid">
          {filtered.map((p) => (
            <div className="card product-card" key={p._id}>
              <div className="product-img-wrap">
                <img src={`/images/${p.image}`} alt={p.name} className="product-img" />
                <span className="product-badge">{p.category}</span>
              </div>
              <h3>{p.name}</h3>
              <p><strong>🌿 Ingredients:</strong> {p.ingredients}</p>
              <p><strong>📋 Usage:</strong> {p.usage}</p>
              <div className="price">${p.price.toFixed(2)}</div>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => openPopup(p)}>
                Order Now 🛒
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Order Popup */}
      {popup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>✕</button>
            <h2>Order: {popup.name}</h2>

            {status === 'success' ? (
              <div>
                <div className="alert alert-success">🎉 Order placed! We'll contact you soon.</div>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={closePopup}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleOrder}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 08012345678" />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    required type="number" min="1" max="100"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: Math.max(1, parseInt(e.target.value) || 1) })}
                  />
                </div>

                {/* Order Summary */}
                <div className="order-summary">
                  <div className="summary-row"><span>Unit Price</span><span>${popup.price.toFixed(2)}</span></div>
                  <div className="summary-row"><span>Quantity</span><span>{form.quantity}</span></div>
                  <div className="summary-row summary-total"><span>Total</span><span>${total}</span></div>
                </div>

                {status === 'error' && <div className="alert alert-error">Something went wrong. Try again.</div>}
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                  {submitting ? 'Placing Order...' : `Confirm Order — $${total}`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
