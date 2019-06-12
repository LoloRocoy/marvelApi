import React from 'react'
import '../styles/animation.css'

function Loading (props) {
    return (
        <img src={props.route} alt="Loading..." className="loading"/>
    )
}

export default Loading