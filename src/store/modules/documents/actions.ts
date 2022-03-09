import axios from "axios";

async function loadPosts({commit}: any) {
    await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
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