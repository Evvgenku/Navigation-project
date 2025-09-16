<script>
  import Map from './components/map/Map.vue';
  import plus from './components/map/images/plus.png'
  import minus from './components/map/images/minus.png'
  import myPosition from './components/map/images/myPosition.png'
  import menu from './components/map/images/menu.png'

  export default {
    data() {
      return {
        plus,
        minus,
        myPosition,
        menu
      }
    },
    components: {Map}
  }
</script>
  
<template>
  <div>
    <div class="menu-container">
      <div class="button menu"><img :src="menu"/></div>
    </div>
    <div class="zoom">
      <div class="button plus"><img :src="plus"/></div>
      <div class="button minus"><img :src="minus"/></div>
      <div class="button myPosition"><img :src="myPosition"/></div>
    </div>
    <Map />
  </div>
</template>

<style>
  .menu {
    position: fixed;
    bottom: 5%;
    left: 1%;
    z-index: 1;
  }
  .zoom {
    position: fixed;
    bottom: 5%;
    right: 1%;
    z-index: 1;
  }

  .myPosition {
    margin-top: 50px;
  }

  .button {
    border-radius: 10px;
    height: 35px;
    width: 35px;
    background: rgba(225, 225, 225, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }

  .button:hover {
    transform: scale(1.1);
  }

  .button:active {
    opacity: 0.4;
  }

  img {
    height: 25px;
    width: 25px;
    opacity: 0.7;
  }

</style>
