import axios,{AxiosResponse} from "axios";
import {Posts} from '../types/documents'

 function loadPosts({commit}: any) {
     axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res:AxiosResponse<Posts[]>) => {
            if (res && res.data) {
                commit('SET_TEST', res.data)
                console.log(res.data,'successs')
            }
        }).catch((error) => {
            if (error.response.status === 422) {
                commit('SET_ERROR',)
            }
            return error
        })
}
export default {
    loadPosts
}