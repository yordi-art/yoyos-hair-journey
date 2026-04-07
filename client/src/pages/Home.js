import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>🌸 Yoyo's Hair Journey</h1>
        <p>Natural herbal hair care products for beautiful, healthy hair.</p>
        <Link to="/products" className="btn btn-secondary">Shop Now</Link>
      </div>

      <h2 className="section-title">Why Choose Yoyo Herbal Hair Oil?</h2>
      <div className="card-grid">
        {[
          { icon: '🌿', title: '100% Natural', desc: 'Made with pure herbal ingredients, no chemicals.' },
          { icon: '💧', title: 'Deep Nourishment', desc: 'Penetrates deep to strengthen hair from roots.' },
          { icon: '✨', title: 'Visible Results', desc: 'See the difference in just 4 weeks of use.' },
        ].map((f) => (
          <div className="card" key={f.title}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
