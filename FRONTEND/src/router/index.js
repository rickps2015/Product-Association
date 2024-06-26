import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      description: 'Home',
      visible: false,
      component: () => import('../views/Home.vue')
    },
    // Página não encontrada
    {
      path: '/:catchAll(.*)',
      name: 'page-not-found',
      component: () => import('../views/PaginaNaoEncontrada.vue')
    },
    // Módulo de Cliente
    {
      path: '/cadastro-cliente',
      name: 'cadastro-cliente',
      description: 'Cadastro de Cliente',
      visible: true,
      icon: 'user-plus',
      component: () => import('../views/CadastroEdicaoCliente.vue')
    },
    {
      path: '/cliente/edit/:idCliente',
      name: 'edit-cliente',
      description: 'Edição de Clientes',
      visible: false,
      component: () => import('../views/CadastroEdicaoCliente.vue')
    },
    {
      path: '/listagem-cliente',
      name: 'listagem-cliente',
      description: 'Listagem de Clientes',
      visible: true,
      icon: 'users',
      component: () => import('../views/ListagemClientes.vue')
    },
    // Módulo de Produto
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
      icon: 'cart-plus',
      component: () => import('../views/CadastroEdicaoProduto.vue')
    },
    {
      path: '/listagem-produto',
      name: 'listagem-produto',
      description: 'Listagem de Produtos',
      visible: true,
      icon: 'cart-shopping',
      component: () => import('../views/ListagemProdutos.vue')
    },
    // Módulo de Associação de Produtos com Cliente
    {
      path: '/associacao-produto-cliente',
      name: 'associacao-produto-cliente',
      description: 'Associação de Produtos/Cliente',
      visible: true,
      icon: 'link',
      component: () => import('../views/AssociarProdutosCliente.vue')
    },
  ]
})

export default router
