<script>
  import maplibregl from 'maplibre-gl';
  import 'maplibre-gl/dist/maplibre-gl.css'

  export default {
    data() {
      return {
        map: null
      }
    },
    mounted() {
      this.map = new maplibregl.Map({
          container: 'map', // container id
          style: 'https://demotiles.maplibre.org/globe.json', // style URL
          center: [0, 0], // starting position [lng, lat]
          zoom: 1 // starting zoom
      })
    }
  }
</script>
  
<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}

canvas {
width: 100%;
height: 100vh;
}
</style>
