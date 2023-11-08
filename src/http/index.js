import axios from './axios'

const login = (data) => {
    return axios.request({
        url:'/api/mobile/elogin',
        method:'post',
        data
    })
}

const register = (data) => {
    return axios.request({
        url:'/api/mobile/eregister',
        method:'post',
        data
    })
}


export {
    login,
    register
}