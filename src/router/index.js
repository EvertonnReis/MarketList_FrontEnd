import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UsuarioHomeView from '../views/UsuarioHomeView.vue'
import CadastroView from '../views/CadastroView.vue'
import CriarListaComprasView from '../views/CriarListaCompras.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginView
    },  
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/home",
      name: "UsuarioHome",
      component: UsuarioHomeView,
      // meta: { requiresAuth: true }
    },
    {
      path: "/cadastro",
      name: "CadastroUsuario",
      component: CadastroView,
    },
    {
      path: "/criar-lista",
      name: "CriarListaCompras",
      component: CriarListaComprasView,
    }
  ]
})

export default router
