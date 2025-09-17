<script>
  import maplibregl from 'maplibre-gl';
  import 'maplibre-gl/dist/maplibre-gl.css';
  import Menu from './menu/Menu.vue';
  import MapControls from './mapControls/MapControls.vue';

  export default {
    data() {
      return {
        map: null,
        latitude: '',
        longitude: ''
      }
    },
    components: {
      Menu,
      MapControls
    },
    methods: {
      zoomIn() {
        this.map.zoomIn({duration: 1000})
      },
      zoomOut() {
        this.map.zoomOut({duration: 1000})
      },
      getUserPosition() {
        if (!navigator.geolocation) {
          console.log('Без доступа к геолокации не определить местоположение')
        } else {
          navigator.geolocation.getCurrentPosition(pos => {
            let {latitude, longitude} = pos.coords
            this.latitude = latitude
            this.longitude = longitude
            console.log(this.latitude, this.longitude) // Проверка, что координаты получены
          }, error => alert('Для определения местонахождения нужен доступ к геолокации') //Переделать в попап
          )
        }
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
  <Menu />
  <MapControls :zoomIn="zoomIn" :zoomOut="zoomOut" :getUserPosition="getUserPosition"/>
</template>

<style>
    body { margin: 0; padding: 0; }
    #map {width: 100vw; height: 100vh;} 
</style>
