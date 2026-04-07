import { useEffect, useState } from 'react';
import API from '../api';

const ADMIN_PASS = 'yoyo123';
const CATEGORIES = ['Growth', 'Strengthening', 'Repair', 'Moisture', 'Shine', 'Styling', 'Combo'];
const EMPTY_FORM = { name: '', ingredients: '', usage: '', price: '', image: '', category: 'Growth' };

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState('');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState(null);
  const [msg, setMsg] = useState(null);

  const load = () => {
    API.get('/products').then((r) => setProducts(r.data));
    API.get('/orders').then((r) => setOrders(r.data));
  };

  useEffect(() => { if (auth) load(); }, [auth]);

  if (!auth) {
    return (
      <div className="page">
        <div className="form-card">
          <h2>Admin Login</h2>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter password" />
          </div>
          <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => {
            if (pass === ADMIN_PASS) setAuth(true);
            else alert('Wrong password');
          }}>Login</button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await API.put(`/products/${editId}`, form);
        setMsg('Product updated!');
        setEditId(null);
      } else {
        await API.post('/products', form);
        setMsg('Product added!');
      }
      setForm(EMPTY_FORM);
      load();
    } catch {
      setMsg('Error saving product.');
    }
  };

  const handleEdit = (p) => {
    setEditId(p._id);
    setForm({ name: p.name, ingredients: p.ingredients, usage: p.usage || '', price: p.price, image: p.image || '', category: p.category || 'Growth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    await API.delete(`/products/${id}`);
    load();
  };

  const f = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="page">
      <h2 className="section-title">Admin Dashboard</h2>

      <div className="admin-section">
        <div className="form-card" style={{ maxWidth: '600px' }}>
          <h2>{editId ? 'Edit Product' : 'Add Product'}</h2>
          {msg && <div className="alert alert-success">{msg}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name</label>
              <input required value={form.name} onChange={f('name')} placeholder="e.g. Yoyo Herbal Growth Oil" />
            </div>
            <div className="form-group">
              <label>Ingredients</label>
              <input required value={form.ingredients} onChange={f('ingredients')} placeholder="e.g. Castor, Rosemary, Coconut" />
            </div>
            <div className="form-group">
              <label>Usage Instructions</label>
              <input required value={form.usage} onChange={f('usage')} placeholder="e.g. Massage into scalp 2x daily" />
            </div>
            <div className="form-group">
              <label>Price ($)</label>
              <input required type="number" value={form.price} onChange={f('price')} placeholder="e.g. 10" />
            </div>
            <div className="form-group">
              <label>Image filename</label>
              <input value={form.image} onChange={f('image')} placeholder="e.g. oil1.jpg" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select value={form.category} onChange={f('category')}>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button type="submit" className="btn btn-primary">{editId ? 'Update' : 'Add Product'}</button>
              {editId && <button type="button" className="btn btn-secondary" onClick={() => { setEditId(null); setForm(EMPTY_FORM); }}>Cancel</button>}
            </div>
          </form>
        </div>
      </div>

      <div className="admin-section">
        <h2 className="section-title">Products ({products.length})</h2>
        <div className="card-grid">
          {products.map((p) => (
            <div className="card" key={p._id}>
              {p.image && <img src={`/images/${p.image}`} alt={p.name} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem' }} />}
              <h3>{p.name}</h3>
              <p>{p.ingredients}</p>
              <p style={{ fontSize: '0.8rem', color: '#aaa' }}>{p.category}</p>
              <div className="price">${Number(p.price).toFixed(2)}</div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-secondary btn-sm" onClick={() => handleEdit(p)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-section">
        <h2 className="section-title">Orders ({orders.length})</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="orders-table">
            <thead>
              <tr>
                <th>#</th><th>Customer</th><th>Phone</th><th>Product</th><th>Qty</th><th>Total</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={o._id}>
                  <td>{i + 1}</td>
                  <td>{o.name}</td>
                  <td>{o.phone}</td>
                  <td>{o.product?.name || '—'}</td>
                  <td>{o.quantity}</td>
                  <td>${((o.product?.price || 0) * o.quantity).toFixed(2)}</td>
                  <td>{new Date(o.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr><td colSpan={7} style={{ textAlign: 'center', color: '#999' }}>No orders yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
