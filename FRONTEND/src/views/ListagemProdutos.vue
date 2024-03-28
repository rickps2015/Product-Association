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
</template>

<script>
import TabelaDefault from '@/components/TabelaDefault.vue';

export default {
    name: 'ListagemProduto',
    components: {
        TabelaDefault
    },
    data() {
        return {
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
            // Lógica para ativar/inativar o item
            console.log('Ativar/Inativar item:', item);
        }
    },
};
</script>
