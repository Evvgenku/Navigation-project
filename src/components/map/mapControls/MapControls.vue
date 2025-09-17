<script>
  import plus from './images/plus.png'
  import minus from './images/minus.png'
  import myPosition from './images/myPosition.png'

  export default {
    data() {
      return {
        plus,
        minus,
        myPosition
      }
    },
    props: {
        zoomIn: {
            type: Function
        },
        zoomOut: {
            type: Function
        },
        getUserPosition: {
            type: Function
        }
    }
  }
</script>
  
<template>
    <div class="zoom">
      <div class="button plus" @click="zoomIn()"><img :src="plus"/></div>
      <div class="button minus" @click="zoomOut()"><img :src="minus"/></div>
      <div class="button myPosition" @click="getUserPosition()"><img :src="myPosition"/></div>
    </div>
</template>

<style scoped>
  .zoom {
    position: fixed;
    bottom: 5%;
    right: 10px;
    z-index: 1;
  }

  .myPosition {
    margin-top: 50px;
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
