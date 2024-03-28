<template>
    <div>
        <h1>Cadastro de Cliente</h1>
        <form @submit="submitForm">
            <label for="name">Nome</label>
            <input type="text" id="name" v-model="cliente.nome" required>

            <label for="document">CPF</label>
            <input type="text" id="document" v-model="cliente.cpf" required>

            <label for="phone">Telefone</label>
            <input type="text" id="phone" v-model="cliente.telefone" required>

            <label for="email">Email</label>
            <input type="email" id="email" v-model="cliente.email" required>

            <label for="status">Status</label>
            <select id="status" v-model="cliente.status" required>
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
            </select>

            <button type="submit">Salvar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CadastroCliente',
    data() {
        return {
            cliente: {
                nome: '',
                cpf: '',
                telefone: '',
                email: '',
                status: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log(this.cliente);
        }
    }
};
</script>

<style>
</style>