import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import { useCounterStore } from './stores/counter';
import BaseIcon from "./components/BaseIcon.vue"
import './assets/main.css'
import 'animate.css';

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
const counterStore = useCounterStore()
  console.log('main.js',counterStore.count)
app.component('BaseIcon', BaseIcon)
app.mount('#app')
