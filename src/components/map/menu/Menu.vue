<script>
  import menu from './images/menu.png'

  export default {
    data() {
      return {
        menu
      }
    }
  }
</script>
  
<template>
    <div class="menu-container">
      <div class="button menu"><img :src="menu"/></div>
    </div>
</template>

<style scoped>
  .menu {
    position: fixed;
    bottom: 5%;
    left: 10px;
    z-index: 1;
  }

  .button {
    border-radius: 10px;
    border: 1px solid rgba(164, 164, 164, 0.9);
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
