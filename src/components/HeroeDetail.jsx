import React, {Component} from 'react'
import controller from '../controllers/heroes'
import style from '../styles/detail'
import Image from './Image.jsx'
import ComicList from './ComicList'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.match.params.heroeID
        this.state = null
        controller.heroeByID(this.id)
        .then(res=>{this.setState(res.data.data.results[0])})
        .catch(err => {console.error(err)})
    }
    
    render() {
        if (this.state === null) {
            return <h1>cargando...</h1>
        } else {
            return (
                <div style={style.detail_container}>
                    <h1>{this.state.name}</h1>
                    <Image alt={this.state.name} {...this.state.thumbnail}/>
                    {this.state.description && <p>{this.state.description}</p>}
                    <h4>{this.state.comics.available} Comics Disponibles!</h4>                                     
                    {this.state.comics.items.map((item, i) => <ComicList key={i} link={item.resourceURI} name={item.name}/>)}
                </div>
                )
            }
        }
}


export default Detail