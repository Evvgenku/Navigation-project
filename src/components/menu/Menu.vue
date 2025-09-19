<script>
  import menu from './images/menu.png'

  export default {
    data() {
      return {
        menu
      }
    },
    props: {
      toggleBurgerMenu: {
        type: Function
      },
      burgerIsOpen: {
        type: Boolean
      }
    }
  }
</script>
  
<template>
    <div class="menu-container">
      <div class="button menu" @click="toggleBurgerMenu()"><img :src="menu"/></div>
      <div :class="{}" v-show="burgerIsOpen">
        <div>Мои маркеры</div>
      </div>
    </div>
</template>

<style scoped>
  .burger-menu {
    height: 80vh;
    width: 20vw;
    background: rgb(236, 255, 232);
    position: fixed;
    z-index: 1;
    bottom: 10vh;
    left: 10px;
    border-radius: 10px;
    border: 1px solid rgb(159, 181, 154);
    transform: translateX(-150%);
    transition: transform 3s;
  }

  .slide-menu {
    transform: translateX(0);
  }

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
