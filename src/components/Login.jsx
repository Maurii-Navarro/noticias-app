import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
