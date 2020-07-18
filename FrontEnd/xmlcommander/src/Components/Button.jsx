import React from 'react'

export default props => {
    return (
        <div className='send-button'>
            <button onClick={e => props.postFile(e)}>Encaminhar Notas</button>
        </div>
    )
}