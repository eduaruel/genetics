import { Link } from 'react-router-dom'

function Header({ inicio, somos, prueba, contacto }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    {/* Logo/Inicio a la izquierda */}
    <Link className="navbar-brand" to="/">
      <img src="/ruta-a-tu-logo.png" alt="Logo" height="30" className="d-inline-block align-text-top me-2" />
      {inicio}
    </Link>

    {/* Botón hamburguesa */}
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navegación a la derecha */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">{inicio}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/quienes-somos">{somos}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pruebas">{prueba}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacto">{contacto}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header