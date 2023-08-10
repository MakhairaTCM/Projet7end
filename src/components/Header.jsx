import React from "react";
import { NavLink } from "react-router-dom"; 
import logo from "../assets/images/logoKasa.svg"; 


const Header = () => {
  return (
    <header className="header">
      {/* Conteneur du logo */}
      <div className="logoContainer">
        <img src={logo} alt="Logo de Kasa" title="Logo de Kasa" />
      </div>
      
      {/* Navigation avec des liens vers la page d'accueil et la page 'A Propos' */}
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/aPropos"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

// Exportez le composant 'Header' pour une utilisation ailleurs dans l'application
export default Header;
