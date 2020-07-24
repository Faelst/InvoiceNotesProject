import React, { Component } from "react";
import './css/CancelInvoice.css'

import Main from "../Components/Main";
import Modal from '../Components/Modal'

import axios from 'axios'

//API URL
let port = 5005

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
  show: false,
  headerIcon: 'fa-exclamation-triangle',
  headerTitle: 'Aviso',
  bodyText: 'Deseja Cancelar a nº',
  hideButton: false
}

export default class inputValidate extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.inputValidate = this.inputValidate.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.cancelInvoice = this.cancelInvoice.bind(this)

    this.state = { ...intialState }
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
      setShow: !this.state.setShow,
      show: !this.state.setShow
    })
    if(!this.state.setShow === false) this.setState({...intialState})
  }

  cancelInvoice() {
    var jsonCancel = [{
      im: "000000014",
      numeroNota: this.state.invoiceSerieNumber,
      motivoCancelamento: this.state.reasonCancellation
    }]

    const headers = {
      'Content-Type': 'application/json',
    }

    axios.post(`${EndPoint}/cancelInvoice`, jsonCancel)
      .then(resp => {
        if (resp.data.status === true) {
          return this.setState({
              headerIcon: 'fa-check-circle',
              headerTitle: 'Nota Cancelada',
              bodyText: `Nota com a serie ${resp.data.cancelInvoiceInformation[0].invoiceSerieNumber} foi cancelada com sucesso !`,
              hideButton: true,
              invoiceSerieNumber: undefined,
              reasonCancellation : undefined
            })
        }
      });

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
            <textarea rows="4" type="text" className="form-control" id='reasonCancellation' onChange={this.handleChange} value={this.state.reasonCancellation}/>
          </div>
          <hr />
          <div className="d-flex flex-row-reverse">
            <Modal hideButton={this.state.hideButton} headerTitle={this.state.headerTitle} bodyText={this.state.bodyText} headerIcon={this.state.headerIcon} cancelInvoice={this.cancelInvoice} inputValidate={this.inputValidate} handleClose={this.handleModal} show={this.state.show} invoiceSerieNumber={this.state.invoiceSerieNumber} reasonCancellation={this.state.reasonCancellation} />
          </div>
        </div>
      </Main>
    );
  }
}