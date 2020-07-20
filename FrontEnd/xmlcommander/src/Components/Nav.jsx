import React from "react";
import "./css/Nav.css";
import {Link} from 'react-router-dom'

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      {/* Refatorar */}
      <Link to="/">
        <i className="fa fa-home"></i> Inicio
      </Link>
      <Link to="/users">
        <i className="fa fa-file"></i> Enviar NFs-e
      </Link>
      <Link to="/cancelInvoice">
        <i className="fa fa-ban"></i> Cancelar NFs-e
      </Link>
      <Link to="/">
        <i className="fa fa-bar-chart"></i> Relatorios
      </Link>
    </nav>
  </aside>
);