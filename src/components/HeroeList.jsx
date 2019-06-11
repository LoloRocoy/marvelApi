import React from 'react'
import {Link} from 'react-router-dom'
import style from '../styles/detail'
import controller from '../controllers/tools'

function HeroeList (props) {
    return (
        <div>
            <Link style={style.link} to={"/heroes/" + controller.shorter(props.link)} >{props.name}</Link>
        </div>
    )
}

export default HeroeList