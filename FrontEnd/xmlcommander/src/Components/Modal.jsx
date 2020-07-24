import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export default (props) => {

    return (
        <React.Fragment>
            <Button variant="primary" onClick={props.inputValidate} className='btn btn-warning'>Cancelar Nota</Button>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="mt-3">
                            <i className={`fa fa-exclamation-triangle mr-2`}></i>
                             Aviso
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Deseja realmente Cancelar a nº <strong>{props.invoiceSerieNumber}</strong> ?</h5>
                    <p>Motivo: {props.reasonCancellation}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose}>Voltar</Button>
                    <Button variant="warning" onClick={props.cancelInvoice}>Sim, Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

