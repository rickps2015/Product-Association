import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      description: 'Home',
      visible: true,
      component: () => import('../views/Home.vue')
    },
    {
      path: '/cadastro-cliente',
      name: 'cadastro-cliente',
      description: 'Cadastro de Cliente',
      visible: true,
      component: () => import('../views/CadastroCliente.vue')
    },
    {
      path: '/produto/edit/:idProduto',
      name: 'edit-produto',
      description: 'Edição de Produtos',
      visible: false,
      component: () => import('../views/CadastroEdicaoProduto.vue')
    },
    {
      path: '/produto/cadastro',
      name: 'cadastro-produto',
      description: 'Cadastro de Produtos',
      visible: true,
      component: () => import('../views/CadastroEdicaoProduto.vue')
    },
    {
      path: '/listagem-produto',
      name: 'listagem-produto',
      description: 'Listagem de Produtos',
      visible: true,
      component: () => import('../views/ListagemProdutos.vue')
    },
  ]
})

export default router
