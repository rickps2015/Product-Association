import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      description: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/cadastro-cliente',
      name: 'cadastro-cliente',
      description: 'Cadastro de Cliente',
      component: () => import('../views/CadastroCliente.vue')
    },
    {
      path: '/cadastro-produto',
      name: 'cadastro-produto',
      description: 'Cadastro de Produtos',
      component: () => import('../views/CadastroProduto.vue')
    },
  ]
})

export default router
