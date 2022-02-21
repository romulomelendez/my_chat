import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/Home'
import Chat from '../views/Chat'

const routes = [

  { path: '/', component: Home },
  { path: '/chat', component: Chat },

]

const router = createRouter({
  
  history: createWebHistory(),
  routes

})

const app = createApp({})

export default router

app.use(router)

app.mount('#app')
