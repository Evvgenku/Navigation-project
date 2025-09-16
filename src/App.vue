<script>
  import Map from './components/map/Map.vue';

  export default {
    data() {
      return {

      }
    },
    components: {Map}
  }
</script>
  
<template>
  <div>
    <div class="menu">
      <button>Меню</button>
    </div>
    <div class="myPosition">
      <button>Я</button>
    </div>
    <Map />
  </div>
</template>

<style>
  .menu {
    position: fixed;
    bottom: 5%;
    left: 5%;
    z-index: 1;
  }
  .myPosition {
    position: fixed;
    bottom: 5%;
    right: 5%;
    z-index: 1;
  }
</style>
