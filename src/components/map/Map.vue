<script>
  import maplibregl from 'maplibre-gl';
  import 'maplibre-gl/dist/maplibre-gl.css';
  import Menu from './menu/Menu.vue';
  import MapControls from './mapControls/MapControls.vue';
  import customUserMarker from './images/UserPosition.svg'

  export default {
    data() {
      return {
        map: null,
        latitude: '',
        longitude: '',
        customUserMarker,
        marker: null
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
        navigator.geolocation.watchPosition(pos => {
          const {latitude, longitude} = pos.coords
          this.latitude = latitude
          this.longitude = longitude
          console.log(this.latitude, this.longitude)
          this.marker.setLngLat([this.longitude, this.latitude])
        });
      },
      moveToUser() {
        this.map.flyTo({
          center: [this.longitude, this.latitude],
          zoom: 15
        })
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
    }),
    this.marker = new maplibregl.Marker({element: document.getElementById('custom-marker')}).setLngLat(['', '']).addTo(this.map)
    }
  }
</script>
  
<template>
  <div id="map"></div>
  <Menu />
  <MapControls :zoomIn="zoomIn" :zoomOut="zoomOut" :getUserPosition="getUserPosition" :moveToUser="moveToUser"/>
  <div id="custom-marker"><img :src="customUserMarker"/></div>
</template>

<style>
    body { margin: 0; padding: 0; }
    #map {width: 100vw; height: 100vh;}
    img {
    height: 25px;
    width: 25px;
    opacity: 0.7;
  }
</style>
