import React from 'react'
import {Link} from 'react-router-dom'
import style from '../styles/detail'

function ComicList (props) {
    return (
        <div>
            <Link style={style.link} to={props.link} >{props.name}</Link>
        </div>
    )
}

export default ComicList