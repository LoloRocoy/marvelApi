import React, {Component} from 'react'
import style from '../styles/global'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div style={style.navBar}>
                <div className="navPart">
                    <Link style={style.mainLink} to="/heroes">Heroes</Link>
                    <Link style={style.mainLink} to="/comics">Comics</Link>
                    <Link style={style.mainLink} to="/series">Series</Link>
                    <Link style={style.mainLink} to="/events">Events</Link>
                    <Link style={style.mainLink} to="/stories">Stories</Link>
                </div>

                <div className="navPart">
                    <p style={style.mainLink}>react ~ API © MRC</p>
                    <img style={style.navBackground} src="https://www.syfy.com/sites/syfy/files/styles/1140x640/public/2017/11/aaaa.jpg" alt="Logotipo Marvel"/>
                </div>
            </div>
        )
    }
}

export default Navbar