<template>
    <div class="container">
        <div class="card rounded-2">

            <div class="card-title bg-light rounded-2 px-3">
                <h3>Listagem de Clientes</h3>
            </div>

            <div class="card-body">

                <div class="row justify-content-end">
                    <div class="col-auto mb-2">
                        <router-link class="p-0" :to="{ name: 'associacao-produto-cliente' }">
                            <button class="btn btn-primary">Assosciar Produtos/Cliente</button>
                        </router-link>
                    </div>
                    <div class="col-auto mb-2">
                        <router-link class="p-0" :to="{ name: 'cadastro-cliente' }">
                            <button class="btn btn-primary">Cadastrar Clientes</button>
                        </router-link>
                    </div>
                </div>

                <TabelaDefault :items="items" :headers="header" @ativarInativar="ativarInativar"
                    @editarItem="editarItem" />

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
    name: 'ListagemClientes',

    components: {
        TabelaDefault,
        NotificacaoDefault
    },

    data() {
        return {
            title: 'Cliente',
            mensagem: '',
            header: ['ID', 'Cliente', 'Status', 'Editar', 'Ativar/Inativar'],
            items: [
                { id: 1, cliente: 'Cliente 01', status: true, editar: true, ativar: false },
                { id: 2, cliente: 'Cliente 02', status: true, editar: true, ativar: true },
                { id: 3, cliente: 'Cliente 03', status: false, editar: true, ativar: true },
                { id: 4, cliente: 'Cliente 04', status: true, editar: false, ativar: true },
                { id: 5, cliente: 'Cliente 05', status: true, editar: true, ativar: false },
                { id: 6, cliente: 'Cliente 06', status: false, editar: false, ativar: false },
                { id: 7, cliente: 'Cliente 07', status: true, editar: false, ativar: true },
                { id: 8, cliente: 'Cliente 08', status: false, editar: true, ativar: true },
                { id: 9, cliente: 'Cliente 09', status: true, editar: false, ativar: false },
                { id: 10, cliente: 'Cliente 10', status: false, editar: true, ativar: false }
            ]
        };
    },

    mounted() {
        if (useNotificationsStore().notification != null) {
            this.$refs.notificationRef.addNotification(useNotificationsStore().notification);
            useNotificationsStore().clearNotification();
        }
    },

    methods: {
        ativarInativar(item) {
            item.status = !item.status;

            if (item.status) this.mensagem = 'O produto "' + item.cliente + '" foi ativado com sucesso!';
            else this.mensagem = 'O produto "' + item.cliente + '" foi desativado com sucesso!';

            const notification = {
                type: 'success',
                title: this.title,
                message: this.mensagem
            };

            // Gravando globalmente a notificação e exibindo no componente de notificação
            useNotificationsStore().showNotification(notification);
            this.$refs.notificationRef.addNotification(useNotificationsStore().notification);
            useNotificationsStore().clearNotification();
        },
        
        editarItem(item) {
            this.$router.push({ name: 'edit-cliente', params: { idCliente: item.id } });
        }
    },
};
</script>
