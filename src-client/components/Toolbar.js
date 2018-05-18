import React from 'react'
import './Toolbar.css'

const Toolbar = ({callback}) => {


    return (
    <div className='toolbar'>
        <button onClick={(e) => callback(e.target.textContent)}>320px</button>
        <button onClick={(e) => callback(e.target.textContent)}>768px</button>
        <button onClick={(e) => callback(e.target.textContent)}>1150px</button>
    </div>)
}


export default Toolbar