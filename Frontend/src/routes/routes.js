//import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router';

//import App from '../App.vue'
import Home from '../views/Home'
import Chat from '../views/Chat'

const routes = [

  { path: '/', name: 'Home', component: Home },
  { path: '/chat', name: 'Chat', component: Chat },

]

const router = createRouter({
  
  history: createWebHashHistory(),
  routes

})

export default router
