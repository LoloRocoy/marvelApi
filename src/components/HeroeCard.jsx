import React, {Component} from 'react'
import style from '../styles/cards'
import {Link} from 'react-router-dom'

class HeroeCard extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div style={style.card_container}>
                <Link style={style.card_link} to={'/heroes/' + this.props.id}>
                    <img src={this.props.thumbnail.path + '.' + this.props.thumbnail.extension} 
                    alt={'Título:' + this.props.name}
                    style={style.card_img}/>
                    <h3 style={style.card_title}>{this.props.name}</h3>
                    
                        {this.props.description && <small style={style.card_description}>{this.props.description}</small>}
                    
                </Link>
            </div>
        )
    }
}

export default HeroeCard