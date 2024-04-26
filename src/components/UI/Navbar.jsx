import { Link } from 'react-router-dom';

export default function Nav({ links }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="logo-link" to="/">
          <img className="navbar-logo" src="/src/assets/ai1.svg" alt="logo of initial, A, I" />
        </Link>
        <div className="nav-links">
          <ul className="link-list bebas-neue-navbar">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
