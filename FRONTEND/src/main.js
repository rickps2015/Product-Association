import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHouse,
  faBars,
  faLightbulb,
  faPenToSquare,
  faCircleXmark,
  faCircleLeft,
  faUserPlus,
  faCartPlus,
  faCartShopping,
  faUsers,
  faLink
} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css'

library.add(faHouse, faBars, faLightbulb, faPenToSquare, faCircleXmark, faCircleLeft, faUserPlus, faCartPlus, faCartShopping, faUsers, faLink)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
