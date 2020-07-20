
import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './css/ProgressBar.css'

export default props => {
    return(
        <div className='progressbar'>
            <ProgressBar now={props.now} label={props.label} variant={props.variant} bsPrefix='progress-bar' className='carregamento' />
        </div>
    )
}