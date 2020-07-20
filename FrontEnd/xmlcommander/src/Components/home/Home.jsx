import React from "react";
import Main from "../Main";

export default (props) => (
  <Main icon="home" title=" Inicio" subtitle="iControl">
    <div className='p-3'>
      <div className="display-4">Bem Vindo ao iControl !</div>
      <hr />
      <h5 className="mb0">
        Sistema de automatização de envios de notas fiscais a prefeitura.
      </h5>
    </div>
  </Main>
);
