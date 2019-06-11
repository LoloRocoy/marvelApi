import React, {Component} from 'react'
import style from '../styles/global'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div style={style.navBar}>
                <div className="thirdPart">
                    <Link style={style.mainLink} to="/">Marvel Heroes</Link>
                    <Link style={style.mainLink} to="/comics">Comics List</Link>
                </div>
                <div className="thirdPart">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUO9ZeVTosJDPddXcIEhOPHd8wQZcsBSCbl-ET0PPgWP-IYJ4Za-cUrU-e" alt="Logotipo Marvel"/>
                </div>
                <div className="thirdPart">
                    <small style={style.mainLink}>react ~ API © MRC</small>
                </div>
            </div>
        )
    }
}

export default Navbar