import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import '@assets/sass/index.scss'
import '@libs/myRem.js'

createApp(App)
.use(router)
.use(store)
.mount('#app')
