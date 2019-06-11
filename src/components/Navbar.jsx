import React, {Component} from 'react'
import style from '../styles/global'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div style={style.navBar}>
                <div>
                    <Link style={style.mainLink} to="/">Marvel Heroes</Link>
                    <Link style={style.mainLink} to="/comics">Comics List</Link>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUO9ZeVTosJDPddXcIEhOPHd8wQZcsBSCbl-ET0PPgWP-IYJ4Za-cUrU-e" alt="Logotipo Marvel"/>
                <small style={style.mainLink}>react ~ API © MRC</small>
            </div>
        )
    }
}

export default Navbar