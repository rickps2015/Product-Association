<template>
    <div class="container">
        <div class="card rounded-2">
            <div class="card-title bg-light rounded-2 px-3">
                <h3>Listagem de Produtos</h3>
            </div>
            <div class="card-body">
                <h6>Listagem de Produtos</h6>
                <TabelaDefault :items="items" :headers="header" @ativarInativar="ativarInativar" />
            </div>
        </div>
    </div>
    <!-- Elemento de notificação -->
    <NotificacaoDefault ref="notificationRef" />
</template>

<script>
import TabelaDefault from '@/components/TabelaDefault.vue';
import { useNotificationsStore } from '@/stores/notifications';
import NotificacaoDefault from '@/components/NotificacaoDefault.vue';

export default {
    name: 'ListagemProduto',
    components: {
        TabelaDefault,
        NotificacaoDefault
    },
    data() {
        return {
            title: 'Produto',
            mensagem: '',
            header: ['ID', 'Produto', 'Status', 'Editar', 'Ativar/Inativar'],
            items: [
                { id: 1, produto: 'Produto 01', status: true, editar: true, ativar: false },
                { id: 2, produto: 'Produto 02', status: true, editar: true, ativar: true },
                { id: 3, produto: 'Produto 03', status: false, editar: true, ativar: true },
                { id: 4, produto: 'Produto 04', status: true, editar: false, ativar: true },
                { id: 5, produto: 'Produto 05', status: true, editar: true, ativar: false },
                { id: 6, produto: 'Produto 06', status: false, editar: false, ativar: false },
                { id: 7, produto: 'Produto 07', status: true, editar: false, ativar: true },
                { id: 8, produto: 'Produto 08', status: false, editar: true, ativar: true },
                { id: 9, produto: 'Produto 09', status: true, editar: false, ativar: false },
                { id: 10, produto: 'Produto 10', status: false, editar: true, ativar: false }
            ]
        };
    },
    methods: {
        ativarInativar(item) {
            item.status = !item.status;
            
            if (item.status) this.mensagem = 'O produto "' + item.produto + '" foi ativado com sucesso!';
            else this.mensagem = 'O produto "' + item.produto + '" foi desativado com sucesso!';

            const notification = {
                type: 'success',
                title: this.title,
                message: this.mensagem
            };

            // Gravando globalmente a notificação e exibindo no componente de notificação
            useNotificationsStore().showNotification(notification);
            this.$refs.notificationRef.addNotification(useNotificationsStore().notification);
            useNotificationsStore().clearNotification();
        }
    },
};
</script>
