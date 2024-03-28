<template>
    <header>
        <div id="header" class="row align-items-center header__background-blue mb-2 border-opacity-75 p-0 mx-0">
            <div class="col-auto container-button align-self-center mt-1">
                <button class="btn btn-light btn-sm mt-1" @click="toggleSidebar">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'CabecalhoDefault',
    methods: {
        toggleSidebar() {
            this.$emit('toggle-barra-lateral');
        },
    }
}
</script>

<style>
@import '@/assets/cabecalho.css';
</style>