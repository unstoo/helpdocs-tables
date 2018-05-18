import React from 'react'
import style from './ContainerWidth.css'

const className = 'container-width'

const ContainerWidth = ({width, children}) => {
    return (
    <div className={className}>
        {children}
    </div>)
}


export default ContainerWidth