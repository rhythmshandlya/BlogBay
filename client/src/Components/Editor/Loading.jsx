import React from 'react'
import './Stylesheets/Loading-save.css'
import svg from './../../data/spin-w.svg'

const Loading = () => {
    return (
        <img className="loading-sv" src={svg} alt="Loading" />
    )
}

export default Loading
