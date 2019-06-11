let shorter = (route) => {
    return route.slice(route.lastIndexOf('/') +1 )
}

export default {shorter}