import axios from "axios";

export function request(config) {

    //1.create axios instance
    const instance = axios.create({
        baseURL: 'http://localhost:8082',
        timeout: 5000
    })

    //2.filter
    instance.interceptors.request.use(
        config => {
            // console.log(config)
            return config
        },
        err => { console.log(err) })
    instance.interceptors.response.use(data => {
        // console.log(data)
        return data
    },
        err => { console.log(err) })

    //3.send network request
    return instance(config)

}