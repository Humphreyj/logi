import axios from 'axios';



export const getShips = () => {
    let allShips = {};
    axios
    .get('https://scm.oceandatarat.org:8443/scm-server/api/v1/ships')
    .then(res => {
       
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
    
}

export const getShops = () => {
    axios
    .get('https://scm.oceandatarat.org:8443/scm-server/api/v1/stores')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}
export const getResources = () => {
    axios
    .get('https://scm.oceandatarat.org:8443/scm-server/api/v1/resources')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

export const getItems = () => {
    axios
    .get('https://scm.oceandatarat.org:8443/scm-server/api/v1/items')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

