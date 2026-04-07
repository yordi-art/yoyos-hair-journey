import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../api';

export default function Order() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', quantity: 1 });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    API.get('/products').then((r) => {
      setProducts(r.data);
      const pid = new URLSearchParams(location.search).get('product');
      const found = r.data.find((p) => p._id === pid);
      setSelected(found || r.data[0] || null);
    }).catch(() => {});
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selected) return;
    setSubmitting(true);
    try {
      await API.post('/orders', { ...form, product: selected._id });
      setStatus('success');
      setForm({ name: '', phone: '', quantity: 1 });
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const total = selected ? (selected.price * form.quantity).toFixed(2) : '0.00';

  return (
    <div className="page">
      <h2 className="section-title">Place Your Order 🛒</h2>

      {status === 'success' && (
        <div className="alert alert-success" style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
          🎉 Order placed successfully! We'll contact you soon.
        </div>
      )}

      {/* Product Selection */}
      <h3 style={{ color: '#ff69b4', marginBottom: '1rem', textAlign: 'center' }}>1. Select a Product</h3>
      <div className="order-products-grid">
        {products.map((p) => (
          <div
            key={p._id}
            className={`order-product-card${selected?._id === p._id ? ' selected' : ''}`}
            onClick={() => setSelected(p)}
          >
            <img src={`/images/${p.image}`} alt={p.name} className="order-product-img" />
            <div className="order-product-info">
              <span className="order-product-badge">{p.category}</span>
              <h4>{p.name}</h4>
              <p>🌿 {p.ingredients}</p>
              <strong className="order-product-price">${p.price.toFixed(2)}</strong>
            </div>
            {selected?._id === p._id && <div className="selected-check">✓</div>}
          </div>
        ))}
      </div>

      {/* Order Form */}
      {selected && (
        <div className="form-card" style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#ff69b4', marginBottom: '1.2rem', textAlign: 'center' }}>
            2. Your Details
          </h3>

          {/* Selected product summary */}
          <div className="selected-product-summary">
            <img src={`/images/${selected.image}`} alt={selected.name} />
            <div>
              <strong>{selected.name}</strong>
              <span>{selected.category}</span>
            </div>
            <strong className="price">${selected.price.toFixed(2)}</strong>
          </div>

          <form onSubmit={handleSubmit}>
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
              <div className="summary-row"><span>Product</span><span>{selected.name}</span></div>
              <div className="summary-row"><span>Unit Price</span><span>${selected.price.toFixed(2)}</span></div>
              <div className="summary-row"><span>Quantity</span><span>{form.quantity}</span></div>
              <div className="summary-row summary-total"><span>Total</span><span>${total}</span></div>
            </div>

            {status === 'error' && <div className="alert alert-error">Something went wrong. Try again.</div>}
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
              {submitting ? 'Placing Order...' : `Confirm Order — $${total} 🌸`}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
