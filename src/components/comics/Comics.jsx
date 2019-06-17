import React, {Component} from 'react'
import controller from '../../controllers/comics'
import style from '../../styles/global'
import ComicCard from './ComicCard'
class Comics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comicList: []
        }

        controller.getComics()
        .then( res => {
            this.setState({
               comicList: res.data.data.results
            })
        })
    }
    
    render() {
        console.log(this.state.comicList);
        return (
            <div style={style.container}>
                {this.state.comicList.map((item, i) => <ComicCard key={i} {...item} />)}
            </div>
        )
    }
}

export default Comics