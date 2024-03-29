<template>
    <aside :class="{ 'sidebar': barraAberta }">
        <ul v-if="barraAberta" class="sidebar__list">
            <li v-for="(rota, index) in routes" :key="index" class="sidebar__item">

                <div v-if="rota.visible">
                    <router-link :to="rota.path" class="sidebar__link" @click="fecharBarraLateral()">
                        <span><font-awesome-icon :icon="`fa-solid fa-${rota.icon}`" /></span>
                        {{ rota.description }}
                    </router-link>
                </div>
                
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

<style scoped>
@import "@/assets/css/barraLateral.css";
</style>
