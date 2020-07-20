import React, { Component } from "react";
import Main from "../Components/Main";
import Input from "../Components/InputFile";

const headerPerson = {
  icon: "ban",
  title: " Cancelar nota fiscal",
  subtitle: "Emissão de notas fiscais a prefeitura.",
};

const intialState = {
    listLog: [],
    nextInvoiceSeries: null,
    selectedFile: null,
    progressSend: 0,
    progressColor: "success",
};

export default class CancelInvoice extends Component {
  render() {
    return (
      <Main {...headerPerson}>
        <div className="p-4">
          <label for="basic-url">Numero da nota:</label>
          <div class="input-group mb-3">
            <input type="number" className="form-control"/>
          </div>
          <label for="basic-url">Numero da nota:</label>
          <div class="input-group mb-3">
            <textarea rows="4" type="text" className="form-control" />
          </div>
          <hr/>
          <div className="d-flex flex-row-reverse">
              <button className='btn btn-warning'>Cancelar Nota</button>
          </div>
        </div>
      </Main>
    );
  }
}
