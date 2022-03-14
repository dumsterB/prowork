import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import VueTablerIcons from "vue-tabler-icons";
import './assets/style.css'
const app = createApp(App)

app.use(Antd).use(VueTablerIcons).use(store).use(router).mount('#app')
