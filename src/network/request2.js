import axios from "axios";

export function request2(config) {

    console.log(config)
    //1.create axios instance
    const instance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 5000
    })

    //2.filter
    instance.interceptors.request.use(
        config => {
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