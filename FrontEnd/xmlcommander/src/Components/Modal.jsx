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
                            <i className={`fa ${props.headerIcon} mr-2`}></i>
                            {props.headerTitle}
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{props.bodyText} <strong>{'' || props.invoiceSerieNumber}</strong> </h5>
                    <p>{props.reasonCancellation ? 'Motivo: ' : ''}{props.reasonCancellation || ''}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={props.handleClose}>Voltar</button>
                    {props.hideButton == false ? <button className="btn btn-warning" onClick={props.cancelInvoice}>Sim, Cancelar</button> : ''}
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

