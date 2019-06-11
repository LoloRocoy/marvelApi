import React from 'react'
import style from '../styles/detail'

function Image (props) {
    console.log(props)
    return <img style={style.image} src={props.path + '.' + props.extension} alt={props.alt}/>
} 

export default Image