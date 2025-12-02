import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          Agenda de Eventos<span className="dot">.</span>
        </Link>
        
        <Link to="/admin" className="header-btn">
          Login 
        </Link>
      </div>
    </header>
  );
}
