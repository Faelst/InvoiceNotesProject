
import React from 'react'

export default props => {
    return (
        <div className='mt-4'>
            <input type="file" onChange={(e) => props.handleSelectChange(e)} />
        </div>
    )
}