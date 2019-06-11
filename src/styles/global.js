let container = {
    display: 'flex',
    flexFlow: 'wrap',
    width: '95%',
    margin: 'auto'
}

let navBar = {
    width: '100%',
    height: '80px',
    backgroundColor: 'grey',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    justifyContent: 'space-between',
    top: 0
}

let mainLink = {
    color: 'white',
    letterSpacing: '3px',
    textDecoration: 'none',
    padding: '10px',
    border: '1px solid white',
    borderRadius: '10px 10px',
    margin: '2vw'
}

export default {
    container,
    navBar,
    mainLink
}