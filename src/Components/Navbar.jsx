import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import './Navbar.css';

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={`navbar navbar-expand-lg ${state.theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favs">Destacados</Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-info" onClick={toggleTheme}>Change Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
