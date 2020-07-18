//Configurastions
import React, { Component } from "react";
import axios from 'axios'

//Components
import DisplayInvoice from '../Components/DisplayInvoice'
import Input from '../Components/Input';
import Button from '../Components/Button'
import DisplayLog from '../Components/DisplayLog'
import Footer from '../Components/Footer'
import ProgressBar from 'react-bootstrap/ProgressBar'

//css's
import './FileSelector.css'

//API URL
const EndPoint = 'http://10.16.128.109:3003/api'

const intialState = {
    listLog: [],
    nextInvoiceSeries: null,
    selectedFile: null,
    progressSend: 0,
    progressColor: 'success'
}

export default class FileSelector extends Component {
    constructor(props) {
        super(props);

        this.getNextInvoice()
        this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
        this.getNextInvoice = this.getNextInvoice.bind(this)
        this.postFile = this.postFile.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)

        this.state = { ...intialState }
    }

    async getNextInvoice() {
        const nextInvoiceSeries = await axios.get(`${EndPoint}/getNextInvoice`)
            .then(resp => resp.data.retorno['$value'])
        this.setState({ nextInvoiceSeries })
    }

    handleChangeDisplay(resp, e) {
        this.state.listLog += `Nota: ${e.NumeroNota}\nStatus da Nota: ${resp.data.invoiceSendResponse.retorno['$value']}\n------------------------------------------------------------------------\n`
        this.setState({ value: this.state.listLog })
    }

    clearLog() {
        this.setState({ value: intialState.listLog })
        this.state.listLog = intialState.listLog
    }

    handleSelectChange(e) {
        console.log(e.target.files[0])

        this.setState({ selectedFile: e.target.files[0], loaded: 0 })
    }

    async postFile(e) {

        this.clearLog()

        //Pre-sets
        const data = new FormData()
        data.append('file', this.state.selectedFile)

        const objXml = await axios.post(`${EndPoint}/convertJson`, data, {}).then(resp => resp)

        /// O backend retorna ao front os dados convertidos, para que o front end possa fazer o trabalho porcentagem
        // Agora precisa fazer um FOR OF onde vai fazer um POST para cada Array de Obejtos.

        for (const [i, e] of objXml.data.entries()) {
            var statusInvoice = await axios.post(`${EndPoint}/sendInvoice`, { invoiceInfo: JSON.stringify(e) })
                .then(resp => {
                    let progressSend = (((100 * (i + 1)) / objXml.data.length).toFixed(1));
                    if ((((100 * (i + 1)) / objXml.data.length).toFixed(1)) == 100.0) progressSend = 100
                    this.setState({ progressSend })
                    this.handleChangeDisplay(resp, e, `${progressSend}%`)
                    return resp;
                })
            if (statusInvoice.data.invoiceSendResponse.retorno['$value'].substring(0, 7) !== "Sucesso") {
                this.setState({ progressColor: 'danger' })
                break;
            }

        }

        this.getNextInvoice();
    }

    render() {
        return (
            <div>
                <DisplayInvoice getNextInvoice={this.state.nextInvoiceSeries} />
                <Input handleSelectChange={this.handleSelectChange} />
                <Button handleChangeDisplay={this.handleChangeDisplay} postFile={this.postFile} />
                <ProgressBar now={this.state.progressSend} label={this.state.progressSend != 0 ? `${this.state.progressSend}%` : ''} variant={this.state.progressColor} bsPrefix='progress-bar' className='carregamento' />
                <DisplayLog value={this.state.value} />
                <Footer />
            </div>
        );
    }
}