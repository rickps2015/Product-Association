<template>
    <div class="container">
        <div class="card rounded-2">
            <div class="card-title bg-light rounded-2 px-3">
                <h3>Cadastro de Produtos</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="submitForm" ref="formProduto" :class="{ 'was-validated': formValidated && !formValidation }">
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nome" class="form-label">Nome do produto</label>
                            <input type="text" id="nome" v-model="produto.nome" class="form-control" required
                                placeholder="Insira o nome do produto">
                            <div class="invalid-feedback">Por favor, insira o nome do produto.</div>
                        </div>

                        <div class="col mb-3">
                            <label for="status" class="form-label">Status</label>
                            <select id="status" v-model="produto.status" class="form-select" required>
                                <option value="" disabled selected>Selecione...</option>
                                <option value="active">Ativo</option>
                                <option value="inactive">Inativo</option>
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
export default {
    name: 'CadastroProduto',
    data() {
        return {
            produto: {
                nome: '',
                status: ''
            },
            formValidated: false
        };
    },
    methods: {
        submitForm() {
            const form = this.$refs.formProduto;

            this.formValidated = true;

            if (form.checkValidity()) {
                console.log(this.produto);
            }
        }
    },
    computed: {
        // Computed para determinar se há campos inválidos
        formValidation() {
            // Retorna true se algum campo for inválido
            return !this.$refs.formProduto.checkValidity();
        }
    }
};
</script>

