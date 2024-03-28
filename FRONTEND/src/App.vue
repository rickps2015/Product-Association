<template>
  <div id="app">
    <Cabecalho @toggle-barra-lateral="toggleBarraLateral()" />

    <transition
      enter-active-class="slide-in-enter-active"
      leave-active-class="slide-out-leave-active">
      <BarraLateral v-if="barraAberta" :routes="routes" :barraAberta="barraAberta" @fechar-barra-lateral="toggleBarraLateral()"/>
    </transition>
  
    <router-view />
  </div>
</template>

<script>
import BarraLateral from './components/BarraLateral.vue'
import Cabecalho from './components/Cabecalho.vue'
import router from './router/index.js'

export default {
  name: 'App',
  components: {
    BarraLateral,
    Cabecalho
  },
  data() {
    return {
      routes: router.options.routes,
      barraAberta: false
    };
  },
  methods: {
    toggleBarraLateral() {
      this.barraAberta = !this.barraAberta;
    }
  }
};
</script>

<style>
.slide-in-enter-active {
  animation: slide-in-enter 0.5s ease;
}

.slide-out-leave-active {
  animation: slide-out-leave 0.5s ease;
}

@keyframes slide-in-enter {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out-leave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

</style>
