import React, {Component} from 'react'
import style from '../../styles/cards'
import {Link} from 'react-router-dom'

class StorieCard extends Component {
    render(){
        return (
            <div style={style.card_container}>
             <Link style={style.card_link} to={'/stories/' + this.props.id}>
                <h3>{this.props.originalIssue.name}</h3>
            </Link>
            </div>
        )
    }
}

export default StorieCard