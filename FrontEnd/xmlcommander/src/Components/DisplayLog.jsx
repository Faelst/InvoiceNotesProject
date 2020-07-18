import React from 'react'

//css
import './css/DisplayLog.css'

export default props => {
    return (
        <div className='mt-4'>
            <label className='d-flex'>Log de carregamento:</label>
            <textarea readOnly className='d-block' value={props.value}
                rows="10" cols="100">
            </textarea>
        </div>
    )
}