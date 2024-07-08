import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/components/codeeditor.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/app',
    name: 'app',
    component: App
  },
]

const router = new VueRouter({
  routes
})

export default router
