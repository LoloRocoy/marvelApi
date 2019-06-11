import React, {Component} from 'react'
import controller from '../controllers/heroes'
import style from '../styles/detail'
import Image from './Image.jsx'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.match.params.heroeID
        this.state = {}
        controller.heroeByID(this.id).then(res=>{this.setState(res.data.data.results[0])}).catch(err => {console.error(err)})
    }
    
    render() {
        console.log(this.state);
        console.log(this.state.series);
        return (
            <div style={style.detail_container}>
                <h1>{this.state.name}</h1>
                <Image alt={this.state.name} {...this.state.thumbnail}/>
                { this.state.description && <p>{this.state.description}</p> }
            </div>
        )
    }

}

export default Detail