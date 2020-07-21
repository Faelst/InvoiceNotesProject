import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export default (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="primary" onClick={props.handleShow} className='btn btn-warning'>Cancelar Nota</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1 className="mt-3">
                            <i className={`fa fa-exclamation-triangle mr-2`}></i>
                             Aviso
                        </h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Deseja realmente Cancelar a nº 9999 ?</h4>
                    <h>Motivo: props.reasonCancellation</h>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Voltar
            </Button>
                    <Button variant="warning">Sim, Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

