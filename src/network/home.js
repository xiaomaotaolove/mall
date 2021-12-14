import { request } from "./request";
import { request2 } from "./request2";
export function getHomeMultiData() {
    return request({
        url: '/home/mutidata',
        method: 'get'
    })
}

export function getHomeGoodsData(type, page) {
    return request2({
        url: `/home/mooc/goods/${type}/${page}/${type}.json`,
        method: 'get',
        params: {
            type,
            page
        }
    })
}