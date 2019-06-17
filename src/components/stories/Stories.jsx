import React, {Component} from 'react'
import controller from '../../controllers/stories'
import StorieCard from './StorieCard';
import style from '../../styles/global'

class Stories extends Component {
    constructor(props) {
        super()
        this.state = {
            storiesList: []
        }
        
        controller.getStories()
        .then( res => {
            console.log('CONSOLE---', res.data.data.results)
            this.setState({
                storiesList: res.data.data.results
            })
        })
    }

    render() {
        return (
            <div style={style.container}>
                {this.state.storiesList.map((item, i) => <StorieCard key={i} {...item} />)}
            </div>                
        )
    }
}


export default Stories