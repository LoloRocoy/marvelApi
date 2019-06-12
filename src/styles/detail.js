let detail_container = {
    margin: 'auto',
    width: '70vw',
    display: 'flex',
    flexDirection: 'row',
}

let detail_div = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

let image = {
    width: '75%',
    height: 'auto',
    boxShadow: '-20px 19px 0px -11px rgba(46,18,77,1)'
}

let link = {
    textDecoration: 'none',
    color: 'grey',
    cursor: 'pointer'
}

let list = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxHeight: '150px',
    border: '1px solid grey',
    overflow: 'hidden',
    overflowY: 'scroll',
    marginTop: '40px',
    minWidth: '150px'
}

let titleList = {
    backgroundColor: 'black',
    color: 'white',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 0
}

let description = {
    padding: '10px',
    fontAlign: 'justify'
}

// let storieImg = {
//     width: '100%',
//     height: 'auto'
// }

export default {
    detail_container,
    image,
    link,
    detail_div,
    list,
    titleList,
    description,
    // storieImg
}