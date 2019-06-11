import React, {Component} from 'react'
import controller from '../controllers/comics'
import style from '../styles/detail'
import Image from './Image.jsx'
import HeroeList from './HeroeList.jsx'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.match.params.comicID
        this.state = null
        controller.comicByID(this.id).then(res=>{this.setState(res.data.data.results[0])}).catch(err => {console.error(err)})
    }
    
    render() {
        if (this.state === null) {
            return <h1>cargando...</h1>
        } else {
            console.log(this.state);
            return (
                <div style={style.detail_container}>
                    <h1>{this.state.title}</h1>
                    <Image alt={this.state.name} {...this.state.thumbnail}/>
                    { this.state.description && <p>{this.state.description}</p> }
                    <h4>{this.state.characters.available} Heroes Aparecen!</h4>
                    { this.state.characters.items.map((item, i) => <HeroeList key={i} link={item.resourceURI} name={item.name}/>) }
                </div>
                )
            }
        }

}

export default Detail