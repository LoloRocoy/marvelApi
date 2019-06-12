import React from 'react'
import {Link} from 'react-router-dom'
import style from '../../styles/detail'
import controller from '../../controllers/tools'

function SerieList (props) {
    return (
        <div>
            <Link style={style.link} to={"/series/" + controller.shorter(props.link)} >{props.name}</Link>
        </div>
    )
}

export default SerieList