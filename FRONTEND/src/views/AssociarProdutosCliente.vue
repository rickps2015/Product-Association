<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-auto">
                <div class="card rounded-2">
                    <div class="card-title bg-light rounded-2 px-3">
                        <h3>Associar Produtos a Cliente</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="salvar">
                            <div class="row mb-2">
                                <div class="col-auto">
                                    <h5>Lista de Clientes</h5>
                                    <select v-model="clienteSelecionado" required class="form-select">
                                        <option value="" disabled selected>Selecione um cliente</option>
                                        <option v-for="client in clientes" :value="client.id" :key="client.id">{{ client.name }}</option>
                                    </select>
                                </div>
                                <div class="col-auto">
                                    <h5>Lista de Produtos</h5>
                                    <div>
                                        <label>
                                            <input type="checkbox" class="form-check-input p-2" @change="selecionarTodosProdutos" v-model="selectAll"> Selecionar Todos
                                        </label>
                                    </div>
                                    <div class="row">
                                        <div class="col-auto tam">
                                            <div v-for="product in produtos" :key="product.id">
                                                <label>
                                                    <input type="checkbox" class="form-check-input p-2" v-model="produtosSelecionados" :value="product.id"> {{ product.name }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-end mt-2">
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary">Salvar</button>
                                </div>
                            </div>
                            <div v-if="!produtosSelecionados.length" class="row mt-2">
                                <div class="col-auto">
                                    <div class="alert alert-danger" role="alert">
                                        Pelo menos um produto deve ser selecionado.
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useNotificationsStore } from '@/stores/notifications';

export default {
    name: 'AssociarProdutosCliente',
    data() {
        return {
            title: 'Associação de Produtos',
            mensagem: 'Associação de produtos a cliente realizada com sucesso!',
            clienteSelecionado: '',
            produtosSelecionados: [],
            selectAll: false,
            clientes: [
                { id: 1, name: 'Cliente 1' },
                { id: 2, name: 'Cliente 2' },
                { id: 3, name: 'Cliente 3' }
            ],
            produtos: [
                { id: 1, name: 'Produto A' },
                { id: 2, name: 'Produto B' },
                { id: 3, name: 'Produto C' },
                { id: 4, name: 'Produto D' },
                { id: 5, name: 'Produto E' },
                { id: 6, name: 'Produto F' },
                { id: 7, name: 'Produto G' },
                { id: 8, name: 'Produto H' },
                { id: 9, name: 'Produto I' },
                { id: 10, name: 'Produto J' },
                { id: 11, name: 'Produto K' },
                { id: 12, name: 'Produto L' },
                { id: 13, name: 'Produto M' },
                { id: 14, name: 'Produto N' },
                { id: 15, name: 'Produto O' },
                { id: 16, name: 'Produto P' },
                { id: 17, name: 'Produto Q' },
                { id: 18, name: 'Produto R' },
                { id: 19, name: 'Produto S' },
                { id: 20, name: 'Produto T' }
            ]
        };
    },
    watch: {
        produtosSelecionados: function () {
            this.selectAll = this.produtosSelecionados.length === this.produtos.length;
        }
    },
    methods: {
        selecionarTodosProdutos() {
            if (this.selectAll) {
                this.produtosSelecionados = this.produtos.map(product => product.id);
            } else {
                this.produtosSelecionados = [];
            }
        },
        salvar() {
            if (this.produtosSelecionados.length === 0) {
                const notification = {
                    type: 'error',
                    title: 'Erro',
                    message: 'Pelo menos um produto deve ser selecionado.'
                };
                useNotificationsStore().showNotification(notification);
            } else {
                const notification = {
                    type: 'success',
                    title: this.title,
                    message: this.mensagem
                };

                // Gravando globalmente a notificação
                useNotificationsStore().showNotification(notification);
                this.$router.push({ name: 'listagem-cliente' });
            }
        }
    }
};
</script>

<style scoped>
.tam {
    max-height: 250px;
    overflow-y: auto;
}
</style>
