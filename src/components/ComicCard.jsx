import React, {Component} from 'react'
import style from '../styles/cards'
import {Link} from 'react-router-dom'

class ComicCard extends Component {
    render(){
        return (
            <div style={style.card_comic}>
             <Link style={style.card_link} to={'/comics/' + this.props.id}>
                <img src={this.props.thumbnail.path + '.' + this.props.thumbnail.extension} 
                alt={'Título:' + this.props.title}
                style={style.card_img}/>
                <h3 style={style.card_title}>{this.props.title}</h3>
                {this.props.description && <p style={style.card_description}>{this.props.description}</p>}            {/* </Link> */}
            </Link>
            </div>
        )
    }
}

export default ComicCard