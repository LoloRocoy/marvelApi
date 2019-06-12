import React, {Component} from 'react'
import controller from '../../controllers/series'
import style from '../../styles/global'
import SerieCard from '../cards/SerieCard.jsx'
class Comics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seriesList: []
        }

        controller.getSeries()
        .then( res => {
            this.setState({
               seriesList: res.data.data.results
            })
        })
    }
    
    render() {
        console.log(this.state.seriesList);
        return (
            <div style={style.container}>
                {this.state.seriesList.map((item, i) => <SerieCard key={i} {...item} />)}
            </div>
        )
    }
}

export default Comics