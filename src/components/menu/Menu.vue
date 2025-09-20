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
      <div :class="['burger-menu', {'slide-menu': burgerIsOpen}]">
        <li>Мои маркеры</li>
        <li>Еще элемент списка</li>
        <li>И еще</li>
      </div>
    </div>
</template>

<style scoped>
  .burger-menu {
    height: 400px;
    width: 200px;
    background: rgba(225, 225, 225, 0.9);
    position: fixed;
    z-index: 1;
    bottom: 30vh;
    left: 10px;
    border-radius: 10px;
    border: 1px solid rgba(164, 164, 164, 0.9);
    transform: translateX(-150%);
    transition: transform 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    list-style-type: none;
  }

  li {
    height: 20px;
    width: 190px;
    background: rgba(209, 208, 208, 0.9);
    border: 1px solid rgba(164, 164, 164, 0.9);
    margin-top: 10px;
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
