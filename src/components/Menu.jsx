import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

export default function Menu() {
  const state = useSelector((state) => state.handleCart);

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top">
  <div class="container">
    <Link class="navbar-brand fw-bold fs-4" to="/">
      RJ SAIS
      </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/produtos">Produtos</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/sobre">Sobre nós</a>
        </li>

      </ul>
      <div className="buttons">
        <Link to="/login" className="btn btn-outline-dark">
           <i className="fa fa-sign-in me-1"></i> Login</Link>
        <Link to="/register" className="btn btn-outline-dark ms-2">
           <i className="fa fa-user-plus me-1"></i> Register</Link>
        <Link to="/carrinho" className="btn btn-outline-dark ms-2">
           <i className="fa fa-shopping-cart me-1"></i> Carrinho ({state.length})</Link>
           
           
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}