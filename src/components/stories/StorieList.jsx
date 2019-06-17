import React from 'react'
import {Link} from 'react-router-dom'
import style from '../../styles/detail'
import controller from '../../controllers/tools'

function StorieList (props) {
    return (
        <div>
            <Link style={style.link} to={"/stories/" + controller.shorter(props.link)} >{props.name}</Link>
        </div>
    )
}

export default StorieList