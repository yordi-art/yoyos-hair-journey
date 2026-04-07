import { useEffect, useState } from 'react';
import API from '../api';

const ADMIN_PASS = 'yoyo123';

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState('');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({ name: '', ingredients: '', price: '', description: '' });
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
      setForm({ name: '', ingredients: '', price: '', description: '' });
      load();
    } catch {
      setMsg('Error saving product.');
    }
  };

  const handleEdit = (p) => {
    setEditId(p._id);
    setForm({ name: p.name, ingredients: p.ingredients, price: p.price, description: p.description || '' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    await API.delete(`/products/${id}`);
    load();
  };

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
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Yoyo Herbal Hair Oil" />
            </div>
            <div className="form-group">
              <label>Ingredients</label>
              <input required value={form.ingredients} onChange={(e) => setForm({ ...form, ingredients: e.target.value })} placeholder="e.g. Castor oil, rosemary, coconut oil" />
            </div>
            <div className="form-group">
              <label>Price (₦)</label>
              <input required type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="e.g. 3500" />
            </div>
            <div className="form-group">
              <label>Description (optional)</label>
              <textarea rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Short product description" />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button type="submit" className="btn btn-primary">{editId ? 'Update' : 'Add Product'}</button>
              {editId && <button type="button" className="btn btn-secondary" onClick={() => { setEditId(null); setForm({ name: '', ingredients: '', price: '', description: '' }); }}>Cancel</button>}
            </div>
          </form>
        </div>
      </div>

      <div className="admin-section">
        <h2 className="section-title">Products ({products.length})</h2>
        <div className="card-grid">
          {products.map((p) => (
            <div className="card" key={p._id}>
              <h3>{p.name}</h3>
              <p>{p.ingredients}</p>
              <div className="price">₦{p.price.toLocaleString()}</div>
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
                <th>#</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Product</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={o._id}>
                  <td>{i + 1}</td>
                  <td>{o.name}</td>
                  <td>{o.phone}</td>
                  <td>{o.address}</td>
                  <td>{o.product?.name || '—'}</td>
                  <td>{new Date(o.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr><td colSpan={6} style={{ textAlign: 'center', color: '#999' }}>No orders yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
