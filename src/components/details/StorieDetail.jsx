import React, {Component} from 'react'
import controller from '../../controllers/stories'
import style from '../../styles/detail'
import ComicList from '../lists/ComicList'
import SerieList from '../lists/SerieList.jsx'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.match.params.storieID
        this.state = null
        controller.storieByID(this.id)
        .then(res=>{this.setState(res.data.data.results[0])})
        .catch(err => {console.error(err)})
    }
    
    render() {
        if (this.state === null) {
            return <h6>cargando...</h6>
        } else {
            console.log(this.state);
            return (
                <div style={style.detail_container}> 
                    <div style={style.detail_div}>
                        <h1>{this.state.originalIssue.name}</h1>
                        <p style={style.description}>{this.state.title}</p>
                        <img alt={"Marvel Storie " + this.state.title} style={style.image}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUUY4DzZoXHTJwdZ4yrgDANOmmV0v4AwIVZLS-qH3SsOTThEHNjG-0rs" />
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
                    </div>
                </div>
                )
            }
        }
}


export default Detail