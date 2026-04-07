import { useEffect, useState } from 'react';
import API from '../api';

const CATEGORIES = ['All', 'Growth', 'Strengthening', 'Repair', 'Moisture', 'Shine', 'Styling', 'Combo'];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [popup, setPopup] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', quantity: 1 });
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [submitting, setSubmitting] = useState(false);
  const [ordered, setOrdered] = useState(null); // product that was ordered

  useEffect(() => {
    API.get('/products').then((r) => setProducts(r.data)).catch(() => {});
  }, []);

  const filtered = products.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(q) || p.ingredients.toLowerCase().includes(q);
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
      setOrdered(popup);
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
      <h2 className="section-title">Our Hair Oils 🌿</h2>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '2rem', marginTop: '-1rem' }}>
        11 premium herbal oils crafted for every hair need
      </p>

      {/* Search & Filter */}
      <div className="products-toolbar">
        <input
          className="search-input"
          placeholder="🔍 Search by name or ingredient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-tabs">
          {CATEGORIES.map((c) => (
            <button key={c} className={`filter-tab${category === c ? ' active' : ''}`} onClick={() => setCategory(c)}>
              {c}
            </button>
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
              <div className="product-card-body">
                <h3>{p.name}</h3>
                {p.description && <p className="product-desc">{p.description}</p>}
                <div className="product-meta">
                  <p><strong>🌿 Ingredients:</strong> {p.ingredients}</p>
                  <p><strong>📋 Usage:</strong> {p.usage}</p>
                </div>
                <div className="product-footer">
                  <div className="price">${p.price.toFixed(2)}</div>
                  <button className="btn btn-primary" onClick={() => openPopup(p)}>Order Now 🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Order Popup */}
      {popup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>✕</button>

            {/* Thank You Screen */}
            {status === 'success' ? (
              <div className="thankyou-screen">
                <div className="thankyou-icon">🎉</div>
                <h2>Thank You, {form.name || 'Beautiful'}!</h2>
                <p>Your order for <strong>{ordered?.name}</strong> has been placed successfully.</p>
                <div className="thankyou-details">
                  <div className="thankyou-row"><span>Product</span><strong>{ordered?.name}</strong></div>
                  <div className="thankyou-row"><span>Quantity</span><strong>{form.quantity}</strong></div>
                  <div className="thankyou-row"><span>Total Paid</span><strong>${(ordered?.price * form.quantity).toFixed(2)}</strong></div>
                </div>
                <p className="thankyou-note">💌 We'll contact you on <strong>{form.phone}</strong> to confirm delivery.</p>
                <p className="thankyou-quote">"Your hair journey to greatness starts now! 🌸"</p>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={closePopup}>
                  Continue Shopping 💕
                </button>
              </div>
            ) : (
              <>
                {/* Product preview in popup */}
                <div className="popup-product-preview">
                  <img src={`/images/${popup.image}`} alt={popup.name} />
                  <div>
                    <h2>{popup.name}</h2>
                    <span className="product-badge" style={{ position: 'static' }}>{popup.category}</span>
                  </div>
                </div>

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
                  <div className="order-summary">
                    <div className="summary-row"><span>Unit Price</span><span>${popup.price.toFixed(2)}</span></div>
                    <div className="summary-row"><span>Quantity</span><span>{form.quantity}</span></div>
                    <div className="summary-row summary-total"><span>Total</span><span>${total}</span></div>
                  </div>
                  {status === 'error' && <div className="alert alert-error">Something went wrong. Try again.</div>}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                    {submitting ? 'Placing Order...' : `Confirm Order — $${total} 🌸`}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
