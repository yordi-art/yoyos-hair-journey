import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products').then((r) => setProducts(r.data)).catch(() => {});
  }, []);

  return (
    <div className="page">
      <h2 className="section-title">Our Products</h2>
      {products.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999' }}>No products yet. Check back soon!</p>
      ) : (
        <div className="card-grid">
          {products.map((p) => (
            <div className="card" key={p._id}>
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '0.5rem' }}>🌿</div>
              <h3>{p.name}</h3>
              <p><strong>Ingredients:</strong> {p.ingredients}</p>
              {p.description && <p>{p.description}</p>}
              <div className="price">₦{p.price.toLocaleString()}</div>
              <Link to={`/order?product=${p._id}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Order Now
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
