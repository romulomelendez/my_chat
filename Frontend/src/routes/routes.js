const routes = [
  { path: '/', component: Home },
  { path: '/chat', component: Chat },
]

const router = VueRouter.createRouter({
  
  history: VueRouter.createWebHashHistory(),
  routes

})

const app = Vue.createApp({})

app.use(router)

app.mount('#app')
