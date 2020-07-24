import React from 'react'

export default props => {
    return (
        <div className='m-2'>
            <h4>Proxima Nota Nº <strong>{props.getNextInvoice}</strong></h4>
        </div>
    )
}