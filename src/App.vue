<script>
  import Map from './components/map/Map.vue';
  import Menu from './components/menu/Menu.vue';

  export default {
    data() {
      return {
        burgerIsOpen: false
      }
    },
    methods: {
      toggleBurgerMenu() {
        this.burgerIsOpen = !this.burgerIsOpen
        console.log(this.burgerIsOpen)
      }
    },
    components: {Map, Menu}
  }
</script>
  
<template>
  <Map />
  <Menu :toggleBurgerMenu="toggleBurgerMenu" :burgerIsOpen="burgerIsOpen"/>
</template>

<style scoped>

</style>
