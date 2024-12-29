import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import BaseIcon from "./components/BaseIcon.vue"
import './assets/main.css'
import 'animate.css';

const app = createApp(App)
const pinia = createPinia()
app.use(router, pinia)
app.component('BaseIcon', BaseIcon)
app.mount('#app')
