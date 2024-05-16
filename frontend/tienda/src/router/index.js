import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesView from '../views/ClientesView.vue'
import VentasView from '../views/VentasView.vue'
import ProveedoresView from '../views/ProveedoresView.vue'
import clientesCreateView from '../views/clientesCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: VentasView
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: ProveedoresView
    },
    {
      path: '/clientes/create',
      name: 'clientescreate',
      component: ClientesCreateView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
