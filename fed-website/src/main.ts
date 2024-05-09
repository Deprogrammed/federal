import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createHead } from '@unhead/vue'

const app = createApp(App)
const head = createHead()
app.use(head)
app.use(router)

app.mount('#app')
