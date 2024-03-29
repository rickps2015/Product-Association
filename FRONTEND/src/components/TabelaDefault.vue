<template>
    <div class="table table-responsive">
        <table class="table">
            <thead class="table__header">
                <tr>
                    <th v-for="(header, index) in headers" :key="index" class="text-center">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td v-for="(value, key) in item" :key="key" class="text-center">
                        <!-- Verifica se a chave é editar, ativar ou editar -->
                        <template v-if="['editar', 'ativar', 'status'].includes(key)">
                            <span v-if="key === 'status'" class="badge"
                                :class="value == true ? 'text-bg-success' : 'text-bg-danger'">
                                {{ value ? 'Ativo' : 'Inativo' }}
                            </span>
                            <span v-else-if="key === 'editar'">
                                <font-awesome-icon :icon="'fa-solid fa-pen-to-square'" class="table__cell text-primary"
                                    @click.prevent="emitEditar(item)" />
                            </span>
                            <span v-else>
                                <font-awesome-icon :icon="'fa-solid fa-lightbulb'" class="table__cell"
                                    :class="item.status == true ? 'text-warning' : ''"
                                    @click.prevent="emitAtivarInativar(item)" />
                            </span>
                        </template>
                        <template v-else>
                            {{ value }}
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableComponent',
    props: {
        items: {
            type: Array,
            required: true
        },
        headers: {
            type: Array,
            required: true
        }
    },
    methods: {
        emitAtivarInativar(item) {
            this.$emit('ativarInativar', item);
        },
        emitEditar(item) {
            this.$emit('editarItem', item);
        }
    }
};
</script>

<style scoped>
@import "@/assets/css/tabelaDefault.css";
</style>
