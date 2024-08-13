import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <button className="home-button">Página Principal</button>
        </div>
        <div className="header-right">
          <button className="nav-button">Quiénes somos</button>
          <Link to="/login">
            <button className="nav-button">Inicio de sesión</button>
          </Link>
        </div>
      </header>

      <div className="content">
        <aside className="sidebar">
          <button className="category-button">Nacionales</button>
          <button className="category-button">Criptomonedas</button>
          <button className="category-button">Locales</button>
          <button className="category-button">Políticas</button>
          <button className="category-button">Deportivas</button>
          <button className="category-button">Económicas</button>
          <button className="category-button">Sociales</button>
          <button className="category-button">Culturales</button>
          <button className="category-button">Científicas</button>
          <button className="category-button">De Farándula</button>
          <button className="category-button">Policiales</button>
          
        </aside>

        <main className="main-content">
          <div className="main-article">Noticia Principal</div>
          <div className="sub-articles">
            <div className="sub-article">Noticia Secundaria 1</div>
            <div className="sub-article">Noticia Secundaria 2</div>
          </div>
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Todos los derechos reservados</p>
        <div className="footer-socials">
          <button className="social-button whatsapp">WhatsApp</button>
          <button className="social-button instagram">Instagram</button>
          <button className="social-button twitter">Twitter</button>
        </div>
      </footer>
    </div>
  );
}

export default App;

