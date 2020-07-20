import React, { Component } from "react";
import Main from "../Components/Main";
import Modal from '../Components/Modal'


import './css/CancelInvoice.css'

const headerPerson = {
  icon: "ban",
  title: " Cancelar nota fiscal",
  subtitle: "Emissão de notas fiscais a prefeitura.",
};

const intialState = {
  invoiceSerieNumber: '',
  reasonCancellation: '',
  setShow: false,
  show: false
}

export default class CancelInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = { ...intialState }
    this.handleChange = this.handleChange.bind(this)
    this.cancelInvoice = this.cancelInvoice.bind(this)
    
  }

  handleChange(e) {
    document.getElementById(e.target.id).setAttribute('class', 'form-control')
    this.setState({ [e.target.id]: e.target.value })
  }

  cancelInvoice() {

    if (this.state.invoiceSerieNumber === '' || this.state.reasonCancellation === '') {
      if (this.state.invoiceSerieNumber === '') document.getElementById('invoiceSerieNumber').setAttribute('class', 'form-control border border-danger')
      if (this.state.reasonCancellation === '') document.getElementById('reasonCancellation').setAttribute('class', 'form-control border border-danger')
      return '';
    }
    
  }


  render() {
    return (
      <Main {...headerPerson}>
        <div className="p-4">
          <label >Numero da nota:</label>
          <div className="input-group mb-3">
            <input type="number" id='invoiceSerieNumber' className="form-control" onChange={this.handleChange} value={this.state.invoiceSerieNumber} />
          </div>
          <label >Numero da nota:</label>
          <div className="input-group mb-3">
            <textarea rows="4" type="text" className="form-control" id='reasonCancellation' onChange={this.handleChange} />
          </div>
          <hr />
          <div className="d-flex flex-row-reverse">
            <Modal cancelInvoice={this.cancelInvoice} modalStatus={true}/>
          </div>
        </div>
      </Main>
    );
  }
}
