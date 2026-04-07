import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../api';

export default function Order() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', address: '', product: '' });
  const [status, setStatus] = useState(null);
  const location = useLocation();

  useEffect(() => {
    API.get('/products').then((r) => {
      setProducts(r.data);
      const params = new URLSearchParams(location.search);
      const pid = params.get('product');
      if (pid) setForm((f) => ({ ...f, product: pid }));
      else if (r.data.length > 0) setForm((f) => ({ ...f, product: r.data[0]._id }));
    });
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/orders', form);
      setStatus('success');
      setForm({ name: '', phone: '', address: '', product: products[0]?._id || '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page">
      <h2 className="section-title">Place Your Order</h2>
      <div className="form-card">
        {status === 'success' && <div className="alert alert-success">🎉 Order placed successfully! We'll contact you soon.</div>}
        {status === 'error' && <div className="alert alert-error">Something went wrong. Please try again.</div>}
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
            <label>Delivery Address</label>
            <textarea required rows={3} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your full address" />
          </div>
          <div className="form-group">
            <label>Select Product</label>
            <select required value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
              {products.map((p) => (
                <option key={p._id} value={p._id}>{p.name} — ₦{p.price.toLocaleString()}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Order Now 🌸</button>
        </form>
      </div>
    </div>
  );
}
