<template>
    <aside :class="{ 'sidebar--open': barraAberta, 'sidebar': barraAberta }">
        <ul v-if="barraAberta" class="sidebar__list">
            <li v-for="(rota, index) in routes" :key="index" class="sidebar__item">
                <router-link v-if="rota.visible" :to="rota.path" class="sidebar__link" @click="fecharBarraLateral()">{{ rota.description
                    }}</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'BarraLateral',
    props: {
        barraAberta: Boolean,
        routes: Array
    },
    methods: {
        fecharBarraLateral() {
            this.$emit('fechar-barra-lateral');
        }
    }
};
</script>

<style>
@import "@/assets/barraLateral.css";
</style>
