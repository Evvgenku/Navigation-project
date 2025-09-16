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
        style: {
            'version': 8,
            'sources': {
                'raster-tiles': {
                    'type': 'raster',
                    'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                    'tileSize': 256,
                    'minzoom': 0,
                    'maxzoom': 19
                }
            },
            'layers': [
                {
                    'id': 'simple-tiles',
                    'type': 'raster',
                    'source': 'raster-tiles',
                    'attribution': "© OpenStreetMap contributors",
                }
            ],
            'id': 'blank'
        },
        center: [46.0951801, 51.4988643], // starting position
        zoom: 12 // starting zoom
    });
    }
  }
</script>
  
<template>
  <div id="map"></div>
</template>

<style>
    body { margin: 0; padding: 0; }
    #map {width: 100vw; height: 100vh;} 
</style>
