import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import BaseIcon from "./components/BaseIcon.vue"
import './assets/main.css'
import 'animate.css';

const app = createApp(App)
app.use(router)
app.component('BaseIcon', BaseIcon)
app.mount('#app')
