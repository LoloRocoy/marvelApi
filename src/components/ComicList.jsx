import React from 'react'
import {Link} from 'react-router-dom'
import style from '../styles/detail'
import controller from '../controllers/comics'

function ComicList (props) {
    return (
        <div>
            <Link style={style.link} to={"/comics/" + controller.shorter(props.link)} >{props.name}</Link>
        </div>
    )
}

export default ComicList