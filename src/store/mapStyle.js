import { defineStore } from "pinia";

export const useMapStyleStore = defineStore('mapStyle', {
    state: () => ({
        currentStyle: null
    }),
    actions: {
      setMapStyle(newStyle) {
        this.currentStyle = newStyle
        console.log(this.currentStyle)
      }
    }
})