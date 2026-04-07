import { Link } from 'react-router-dom';

const quotes = [
  { quote: "Your hair is your crown. Wear it with pride.", icon: '👑' },
  { quote: "Healthy hair starts from within — nourish your roots, grow your confidence.", icon: '🌱' },
  { quote: "Every strand tells your story. Make it a beautiful one.", icon: '✨' },
  { quote: "Glow up starts with self-care. Your hair deserves the best.", icon: '💫' },
];

const features = [
  { icon: '🌿', title: '100% Natural', desc: 'Pure herbal ingredients, zero chemicals, zero compromise.' },
  { icon: '💧', title: 'Deep Nourishment', desc: 'Penetrates deep into roots to strengthen from within.' },
  { icon: '✨', title: 'Visible Results', desc: 'See thicker, longer, shinier hair in just 4 weeks.' },
  { icon: '🛡️', title: 'Anti-Breakage', desc: 'Fortifies each strand to prevent breakage and split ends.' },
  { icon: '🌸', title: 'Scalp Health', desc: 'Balances scalp moisture and eliminates dandruff naturally.' },
  { icon: '⚡', title: 'Fast Growth', desc: 'Stimulates follicles for accelerated hair growth.' },
];

const steps = [
  { step: '01', title: 'Choose Your Oil', desc: 'Pick the perfect oil for your hair type and concern.' },
  { step: '02', title: 'Apply & Massage', desc: 'Warm a few drops and massage gently into your scalp.' },
  { step: '03', title: 'Leave & Nourish', desc: 'Let the herbs work their magic for at least 30 minutes.' },
  { step: '04', title: 'Glow Up!', desc: 'Wash off and reveal soft, shiny, healthy hair.' },
];

const testimonials = [
  { name: 'Amara K.', text: 'My hair grew 3 inches in 2 months! Yoyo oils are a miracle.', stars: 5, avatar: '👩🏾' },
  { name: 'Fatima B.', text: 'Finally found something that stops my breakage. I\'m obsessed!', stars: 5, avatar: '👩🏽' },
  { name: 'Zara M.', text: 'My scalp feels so healthy and my hair is so thick now. Love it!', stars: 5, avatar: '👩🏿' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="home-hero">
        <div className="hero-content">
          <div className="hero-badge">🌿 100% Natural Herbal Care</div>
          <h1>Your Hair Deserves<br /><span className="hero-highlight">To Glow</span></h1>
          <p>Discover Yoyo's premium herbal hair oils — crafted with love for every hair type. Grow longer, stronger, and more beautiful hair naturally.</p>
          <div className="hero-btns">
            <Link to="/products" className="btn btn-primary">Shop Now 🛒</Link>
            <Link to="/tips" className="btn btn-outline">Hair Tips 💡</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>500+</strong><span>Happy Customers</span></div>
            <div className="stat"><strong>11</strong><span>Products</span></div>
            <div className="stat"><strong>100%</strong><span>Natural</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-oil-bottle">
            <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" width="200">
              <defs>
                <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff69b4"/>
                  <stop offset="100%" stopColor="#c2185b"/>
                </linearGradient>
                <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffb3d1"/>
                  <stop offset="100%" stopColor="#ff69b4"/>
                </linearGradient>
              </defs>
              <rect x="80" y="20" width="40" height="30" rx="8" fill="url(#bottleGrad)"/>
              <rect x="85" y="10" width="30" height="15" rx="5" fill="#c2185b"/>
              <path d="M60 60 Q55 80 50 100 L50 240 Q50 260 100 260 Q150 260 150 240 L150 100 Q145 80 140 60 Z" fill="white" stroke="#ffc0cb" strokeWidth="2"/>
              <path d="M52 140 L52 240 Q52 258 100 258 Q148 258 148 240 L148 140 Z" fill="url(#liquidGrad)" opacity="0.6"/>
              <rect x="62" y="130" width="76" height="90" rx="8" fill="white" opacity="0.9"/>
              <text x="100" y="158" fontFamily="Arial" fontSize="9" fontWeight="bold" fill="#ff69b4" textAnchor="middle">YOYO'S</text>
              <text x="100" y="172" fontFamily="Arial" fontSize="7" fill="#c2185b" textAnchor="middle">HAIR JOURNEY</text>
              <text x="100" y="188" fontFamily="Arial" fontSize="18" textAnchor="middle">🌿</text>
              <text x="100" y="208" fontFamily="Arial" fontSize="7" fill="#888" textAnchor="middle">Herbal Hair Oil</text>
              <ellipse cx="75" cy="100" rx="6" ry="20" fill="white" opacity="0.3" transform="rotate(-15 75 100)"/>
            </svg>
          </div>
          <div className="floating-badge fb1">🌸 Herbal</div>
          <div className="floating-badge fb2">✨ Glow</div>
          <div className="floating-badge fb3">💪 Strong</div>
        </div>
      </div>

      {/* Motivation Quotes */}
      <div className="section quotes-section">
        <h2 className="section-title">Your Glow Up Starts Today 💫</h2>
        <div className="quotes-grid">
          {quotes.map((q) => (
            <div className="quote-card" key={q.quote}>
              <div className="quote-icon">{q.icon}</div>
              <p>"{q.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="section features-section">
        <h2 className="section-title">Why Yoyo Herbal Oils? 🌿</h2>
        <div className="card-grid">
          {features.map((f) => (
            <div className="card feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hair Growth Visual Section */}
      <div className="section growth-section">
        <div className="growth-content">
          <h2>The Science of <span className="hero-highlight">Hair Growth</span> 🔬</h2>
          <p>Our herbal oils are packed with nutrients that feed your hair follicles directly. Each ingredient is carefully selected to target a specific hair concern.</p>
          <div className="growth-facts">
            <div className="fact"><span className="fact-num">3x</span><span>Faster Growth</span></div>
            <div className="fact"><span className="fact-num">80%</span><span>Less Breakage</span></div>
            <div className="fact"><span className="fact-num">4wks</span><span>To See Results</span></div>
          </div>
          <Link to="/products" className="btn btn-primary">Explore Oils →</Link>
        </div>
        <div className="growth-visual">
          {['🌱', '🌿', '🌳'].map((e, i) => (
            <div className="growth-stage" key={i}>
              <div className="growth-emoji">{e}</div>
              <div className="growth-label">{['Week 1', 'Week 2', 'Week 4'][i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="section">
        <h2 className="section-title">How It Works ✨</h2>
        <div className="steps-grid">
          {steps.map((s) => (
            <div className="step-card" key={s.step}>
              <div className="step-num">{s.step}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="section testimonials-section">
        <h2 className="section-title">Girls Are Glowing Up 💕</h2>
        <div className="card-grid">
          {testimonials.map((t) => (
            <div className="card testimonial-card" key={t.name}>
              <div className="testimonial-avatar">{t.avatar}</div>
              <div className="stars">{'⭐'.repeat(t.stars)}</div>
              <p>"{t.text}"</p>
              <strong>{t.name}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <h2>Ready to Start Your Hair Journey? 🌸</h2>
        <p>Join hundreds of girls who transformed their hair with Yoyo's herbal oils.</p>
        <Link to="/products" className="btn btn-white">Shop All Products →</Link>
      </div>
    </div>
  );
}
