<template>
    <header>
        <div class="row align-items-center header header__background-blue mb-2 border-opacity-75 p-0 mx-0">
            <div class="col-auto header__container-button align-self-center mt-1">
                <button class="btn btn-light btn-sm mt-1" @click="toggleSidebar">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
                <button class="btn btn-light btn-sm mt-1 ms-2" @click="selfback">
                    <font-awesome-icon icon="fa-solid fa-circle-left" />
                </button>
                <button class="btn btn-light btn-sm mt-1 ms-2" @click="goHome">
                    <font-awesome-icon icon="fa-solid fa-house" />
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
        selfback() {
            this.$router.go(-1);
        },
        goHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style>
@import '@/assets/css/cabecalho.css';
</style>