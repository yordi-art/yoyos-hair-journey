import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">🌸 Yoyo's Hair Journey</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/tips">Hair Tips</Link>
        <Link to="/order">Order</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </div>
  );
}
