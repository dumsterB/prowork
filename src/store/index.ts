import {createStore} from 'vuex'
import Documents from './modules/documents/index'
import axios from "axios";

export default createStore({
    modules: {
        Documents,
    },
})
