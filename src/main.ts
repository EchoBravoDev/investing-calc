import { createApp } from 'vue'
import Root from './App.vue'
import { install } from './plugins'
import 'windi.css'
import "./assets/main.css"
import "./sw-registrer"

const app = createApp(Root)

install(app)

app.mount('#app')
