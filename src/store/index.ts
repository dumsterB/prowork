import { createStore } from 'vuex'
import Documents from './modules/documents/index'
export default createStore({
  modules:{
    Documents
  },
  state:{
    test:'hello'
  }
})
