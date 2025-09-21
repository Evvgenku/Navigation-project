<script>
  import menu from './images/menu.png'
  import contourLines from './images/ContourLines.png'
  import satellite from './images/Satellite.png'
  import scheme from './images/Scheme.png'
  import {satelliteMap} from '../map/assets/mapConfigs'
  import {hillShade} from '../map/assets/mapConfigs'
  import {raster} from '../map/assets/mapConfigs'
  import { mapActions } from 'pinia'
  import { useMapStyleStore } from '@/store/mapStyle'

  export default {
    data() {
      return {
        menu,
        contourLines,
        satellite,
        scheme,
        raster,
        satelliteMap,
        hillShade
      }
    },
    methods: {
      ...mapActions(useMapStyleStore, ['setMapStyle'])
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
      <div class="button menu" @click="toggleBurgerMenu()"><img class="imgButton" :src="menu"/></div>
      <div :class="['burger-menu', {'slide-menu': burgerIsOpen}]">
        <li>Мои маркеры</li>
        <li>Еще элемент списка</li>
        <li>И еще</li>
        <div class="mapStyle-container">
          <div class="mapStyle"><img class="mapViewButtons" :src="scheme" @click="this.setMapStyle(raster)"/></div>
          <div class="mapStyle"><img class="mapViewButtons" :src="satellite" @click="this.setMapStyle(satelliteMap)"/></div>
          <div class="mapStyle"><img class="mapViewButtons" :src="contourLines" @click="this.setMapStyle(hillShade)"/></div>
        </div>
      </div>
    </div>
</template>

<style scoped>
  .mapStyle-container {
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: space-around;
    width: 200px;
  }
  .mapStyle {
    border: 1px solid rgba(164, 164, 164, 0.9);
    border-radius: 10px;
    height: 40px;
    width: 40px;
  }

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

  .imgButton {
    height: 25px;
    width: 25px;
    opacity: 0.7;
  }

  .mapViewButtons {
    height: 40px;
    width: 40px;
    opacity: 1;
    border-radius: 10px;
  }

  .mapViewButtons:hover {
    transform: scale(1.2);
  }

  .mapViewButtons:active {
    opacity: 0.4;
  }
</style>
