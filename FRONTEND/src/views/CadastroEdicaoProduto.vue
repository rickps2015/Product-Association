<template>
    <div class="container">
        <div class="card rounded-2">

            <div class="card-title bg-light rounded-2 px-3">
                <h3>{{ title }}</h3>
            </div>

            <div class="card-body">
                <form @submit.prevent="submissaoFormulario" ref="formProduto"
                    :class="{ 'was-validated': formValidated && !formValidation }">

                    <div class="row">
                        <div class="col mb-2">
                            <label for="nome" class="form-label mb-0">Nome do produto</label>
                            <input type="text" id="nome" v-model="produto.nome" class="form-control" required
                                placeholder="Insira o nome do produto">
                            <div class="invalid-feedback">Por favor, insira o nome do produto.</div>
                        </div>

                        <div class="col mb-2">
                            <label for="status" class="form-label mb-0">Status</label>
                            <select id="status" v-model="produto.status" class="form-select" required>
                                <option value="" disabled selected>Selecione...</option>
                                <option :value="true">Ativo</option>
                                <option :value="false">Inativo</option>
                            </select>
                            <div class="invalid-feedback">Por favor, selecione o status.</div>
                        </div>
                    </div>

                    <div class="row justify-content-end">
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
import { useNotificationsStore } from '@/stores/notifications';

export default {
    name: 'CadastroEdicaoProduto',

    data() {
        return {
            title: 'Cadastro de Produto',
            mensagem: 'Cadastro realizado com sucesso!',
            produto: {
                nome: '',
                status: ''
            },
            formValidated: false
        };
    },

    beforeRouteEnter(to, from, next) {
        // Verificar se há um ID de produto na rota
        if (to.params.idProduto) {

            const title = 'Edição de Produto';
            const mensagem = 'Edição realizada com sucesso!';

            const produto = {
                nome: 'Produto 01',
                status: true
            };

            next(vm => {
                // Atribuir os valores ao componente
                vm.title = title;
                vm.mensagem = mensagem;
                vm.produto = produto;
            });
        } else {
            const title = 'Cadastro de Produto';
            const mensagem = 'Cadastro realizado com sucesso!';

            next(vm => {
                // Atribuir os valores ao componente
                vm.title = title;
                vm.mensagem = mensagem; 
                vm.produto = { nome: '', status: '' }; 
            });
        }
    },

    computed: {
        formValidation() {
            return !this.$refs.formProduto.checkValidity();
        }
    },

    methods: {
        submissaoFormulario() {
            const form = this.$refs.formProduto;

            this.formValidated = true;

            if (form.checkValidity()) {
                const notification = {
                    type: 'success',
                    title: this.title,
                    message: this.mensagem
                };
                
                // Gravando globalmente a notificação
                useNotificationsStore().showNotification(notification);
                this.$router.push({ name: 'listagem-produto' });
            }
        }
    },
};
</script>
