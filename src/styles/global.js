let container = {
    margin: 'auto',
    display: 'flex',
    flexFlow: 'wrap',
    width: '95vw'
}

let navBar = {
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    justifyContent: 'space-around',
    top: 0,
    overflow: 'hidden'
}

let mainLink = {
    color: 'white',
    letterSpacing: '3px',
    textDecoration: 'none',
    padding: '10px',
    border: '1px solid white',
    borderRadius: '10px 10px',
    margin: '0.2vw',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'grey',
    zIndex: 1000
}

let navBackground = {
    width: '100vw',
    height: 'auto',
    position: 'absolute',
    left: 0,
}

let landing = {
    fontSize: '100pt',
    textAlign: 'center',
    color: 'grey',
    padding: '50px'
}

export default {
    container,
    navBar,
    mainLink,
    navBackground,
    landing
}