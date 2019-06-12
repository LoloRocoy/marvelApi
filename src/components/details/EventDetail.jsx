import React, {Component} from 'react'
import controller from '../../controllers/events'
import style from '../../styles/detail'
import Image from '../Image.jsx'
import HeroeList from '../lists/HeroeList'
import ComicList from '../lists/ComicList'
import SerieList from '../lists/SerieList.jsx'
import StorieList from '../lists/StorieList'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.match.params.eventID
        this.state = null
        controller.eventByID(this.id).then(res=>{this.setState(res.data.data.results[0])}).catch(err => {console.error(err)})
    }
    
    render() {
        if (this.state === null) {
            return <h6>Cargando...</h6>
        } else {
            console.log(this.state);
            return (
                <div style={style.detail_container}>
                    <div style={style.detail_div}>
                        <h1>{this.state.title}</h1>
                        <Image alt={this.state.name} {...this.state.thumbnail}/>
                        { this.state.description && <p style={style.description}>{this.state.description}</p> }
                    </div>

                    <div style={style.detail_div}>
                        <div style={style.list}>
                            <h4 style={style.titleList}>{this.state.characters.available} Heroes Aparecen!</h4>
                            { this.state.characters.items.map((item, i) => <HeroeList key={i} link={item.resourceURI} name={item.name}/>) }
                        </div>

                        <div style={style.list}>
                            <h4 style={style.titleList}>{this.state.comics.available} Comics Disponibles!</h4>                                     
                            {this.state.comics.items.map((item, i) => <ComicList key={i} link={item.resourceURI} name={item.name}/>)}
                        </div>

                        <div style={style.list}>
                            <h4 style={style.titleList}>{this.state.series.available} Series Disponibles!</h4>                                     
                            {this.state.series.items.map((item, i) => <SerieList key={i} link={item.resourceURI} name={item.name}/>)}
                        </div>

                        <div style={style.list}>
                            <h4 style={style.titleList}>{this.state.stories.available} Historias Disponibles!</h4>                                     
                            {this.state.stories.items.map((item, i) => <StorieList key={i} link={item.resourceURI} name={item.name}/>)}
                        </div>
                    </div>


                </div>
                )
            }
        }
}

export default Detail