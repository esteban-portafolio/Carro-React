import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button id="btn-carrito" type="button" data-bs-toggle="collapse" data-bs-target="#btn-items"
          aria-expanded="false" aria-controls="Carrito">
          <ion-icon ios="cart-outline" md="cart-sharp"></ion-icon>
          <span id="contadorCarrito">0</span>
        </button>
        <a className="navbar-brand" href="index.html">
          <img src="./src/img/cap2.png" className="img-fluid" width="80px" height="80px"/> <span id='span'>Super Tiendita</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Productos</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="contacto.html">Contacto</a>
            </li> */}
          </ul>
          <input defaultValue="search" className="form-control d-flex w-25 m-2" id="buscaInput" type="search"
            placeholder="Buscar" aria-label="Search"/>
        </div>

      </div>
    </nav>

  )
}

export default Navbar