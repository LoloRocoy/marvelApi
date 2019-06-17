import React, {Component} from 'react'
import controller from '../../controllers/events'
import style from '../../styles/global'
import EventCard from './EventCard.jsx'
class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventList: []
        }

        controller.getEvents()
        .then( res => {
            this.setState({
               eventList: res.data.data.results
            })
        })
    }
    
    render() {
        return (
            <div style={style.container}>
                {this.state.eventList.map((item, i) => <EventCard key={i} {...item} />)}
            </div>
        )
    }
}

export default Events