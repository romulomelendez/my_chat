import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router';

import Home from '../views/Home'
import Chat from '../views/Chat'

const routes = [

  { path: '/', component: Home },
  { path: '/chat', component: Chat },

]

const router = createRouter({
  
  history: createWebHashHistory(),
  routes

})

export default router

const app = createApp({})
app.use(router)
app.mount('#app')
