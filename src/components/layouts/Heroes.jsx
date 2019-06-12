import React, {Component} from 'react'
import controller from '../../controllers/heroes'
import HeroeCard from '../cards/HeroeCard';
import style from '../../styles/global'

class Heroes extends Component {
    constructor(props) {
        super()
        this.state = {
            heroesList: []
        }
        
        controller.getHeroes()
        .then( res => {
            console.log('CONSOLE---', res.data.data.results)
            this.setState({
                heroesList: res.data.data.results
            })
        })
    }

    render() {
        return (
            <div style={style.container}>
                {this.state.heroesList.map((item, i) => <HeroeCard key={i} {...item} />)}
            </div>                
        )
    }
}


export default Heroes