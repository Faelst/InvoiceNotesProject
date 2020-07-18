import React, { Component } from 'react'

export default props => {
    return (
        <div className='mt-5'>
            <h4>Proxima Nota Nº <strong>{props.getNextInvoice}</strong></h4>
        </div>
    )
}