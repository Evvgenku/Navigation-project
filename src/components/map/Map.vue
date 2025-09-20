<script>
  import maplibregl from 'maplibre-gl';
  import 'maplibre-gl/dist/maplibre-gl.css';
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
          console.log(this.longitude, this.latitude)
          //Проверяет что маркер не существует и создет его и перемещает экран к нему
          if (!this.marker) {
            this.marker = new maplibregl.Marker({element: document.getElementById('custom-marker')}).setLngLat([this.longitude, this.latitude]).addTo(this.map);
            this.moveToUser();
          };
          this.marker.setLngLat([this.longitude, this.latitude])
          this.map.setCenter([this.longitude, this.latitude])
        }, error => {
          alert('Нет доступа к геолокации');
          if (this.marker) {
            //Удалить маркер с карты
            this.marker.remove();
            //Не перемещать карту к последнему местоположению
            this.marker = null;
          }
        });
      },
      moveToUser() {
        //Если маркер существует, то перемещает к нему
        if (this.marker) {
          this.map.flyTo({
            center: [this.longitude, this.latitude],
            zoom: 17
        })
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
    })
    }
  }
</script>
  
<template>
  <div id="map">
    <!-- Сдеать динамически создаваемым -->
    <div id="custom-marker"><img :src="customUserMarker"/></div>
  </div>
  <MapControls :zoomIn="zoomIn" :zoomOut="zoomOut" :getUserPosition="getUserPosition" :moveToUser="moveToUser"/>
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
