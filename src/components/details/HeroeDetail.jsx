import React, {Component} from 'react'
import controller from '../../controllers/heroes'
import style from '../../styles/detail'
import Image from '../Image.jsx'
import ComicList from '../lists/ComicList'
import EventList from '../lists/EventList'
import SerieList from '../lists/SerieList.jsx'
import StorieList from '../lists/StorieList'

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
            return <h6>cargando...</h6>
        } else {
            return (
                <div style={style.detail_container}> 
                    <div style={style.detail_div}>
                        <h1>{this.state.name}</h1>
                        <Image alt={this.state.name} {...this.state.thumbnail}/>
                        {this.state.description && <p style={style.description}>{this.state.description}</p>}
                    </div>

                    <div style={style.detail_div}>
                        <div style={style.list}>
                            <h4 style={style.titleList}>{this.state.comics.available} Comics Disponibles!</h4>                                     
                            {this.state.comics.items.map((item, i) => <ComicList key={i} link={item.resourceURI} name={item.name}/>)}
                        </div>

                        <div style={style.list}>
                            <h4 style={style.titleList}>{this.state.series.available} Series Disponibles!</h4>                                     
                            {this.state.series.items.map((item, i) => <SerieList key={i} link={item.resourceURI} name={item.name}/>)}
                        </div>

                        <div style={style.list}>
                            <h4 style={style.titleList}>{this.state.events.available} Eventos Disponibles!</h4>                                     
                            {this.state.events.items.map((item, i) => <EventList key={i} link={item.resourceURI} name={item.name}/>)}
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