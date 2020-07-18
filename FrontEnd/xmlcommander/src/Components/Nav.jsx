import React from "react";
import "./css/Nav.css";
import {Link} from 'react-router-dom'

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      {/* Refatorar */}
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/encaminharNotas">
        <i className="fa fa-users"></i> Encaminhar Notas
      </Link>
      <Link to="/cancelarNotas">
        <i className="fa fa-list-alt"></i> Cancelar Nota
      </Link>
    </nav>
  </aside>
);
