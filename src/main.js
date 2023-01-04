import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import axios from "axios"
import router from "./router"

axios.defaults.baseURL = "https://vue-blog-card-app-default-rtdb.firebaseio.com"
axios.defaults.headers.common["Authorization"] = "tugrankenger_key"
axios.defaults.headers.get["Accepts"] = "Application/json"

const app= createApp(App)
app.use(router)
app.mount('#app')
