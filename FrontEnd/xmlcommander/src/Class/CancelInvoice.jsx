import React, { Component } from "react";
import './css/CancelInvoice.css'

import Main from "../Components/Main";
import Modal from '../Components/Modal'

import axios from 'axios'

//API URL
let port
process.env.NODE_ENV === "development" ? port = 5005 : port = 3003;
const EndPoint = `http://10.16.128.109:${port}/api`;

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

export default class inputValidate extends Component {
  constructor(props) {
    super(props);
    this.state = { ...intialState }
    this.handleChange = this.handleChange.bind(this)
    this.inputValidate = this.inputValidate.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.cancelInvoice = this.cancelInvoice.bind(this)
  }

  handleChange(e) {
    document.getElementById(e.target.id).setAttribute('class', 'form-control')
    this.setState({ [e.target.id]: e.target.value })
  }

  inputValidate() {

    if (this.state.invoiceSerieNumber === '' || this.state.reasonCancellation === '') {
      if (this.state.invoiceSerieNumber === '') document.getElementById('invoiceSerieNumber').setAttribute('class', 'form-control border border-danger')
      if (this.state.reasonCancellation === '') document.getElementById('reasonCancellation').setAttribute('class', 'form-control border border-danger')
      return '';
    }
    this.handleModal();
  }

  handleModal() {
    this.setState({
      setShow : !this.state.setShow,
      show: !this.state.setShow
    })
  }

  cancelInvoice(){
    console.log('entri no cancel')
    var jsonCancel = [{
      im: "000022483",
      numeroNota: this.state.invoiceSerieNumber,
      motivoCancelamento: this.state.reasonCancellation
    }]

    const headers = {
      'Content-Type': 'application/json',
    }    

    axios.post(`${EndPoint}/cancelInvoice` /*, {headers} , JSON.parse(jsonCancel)*/).then(resp => console.log(resp));

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
            <Modal cancelInvoice={this.cancelInvoice} inputValidate={this.inputValidate} handleClose={this.handleModal} show={this.state.show} invoiceSerieNumber={this.state.invoiceSerieNumber} reasonCancellation={this.state.reasonCancellation} />
          </div>
        </div>
      </Main>
    );
  }
}
