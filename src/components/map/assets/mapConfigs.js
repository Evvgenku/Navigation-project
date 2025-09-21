export const satelliteMap = {
    "version": 8,
    "sources": {
        "satellite": {
            "type": "raster",
            "tiles": [
                "https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"
            ],
            "tileSize": 256
        }
    },
    "layers": [{
        "id": "satellite",
        "type": "raster",
        "source": "satellite"
    }]
};

export const hillShade = {
    version: 8,
    sources: {
        hillshadeSource: {
            type: 'raster-dem',
            url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
            tileSize: 256
        }
    },
    layers: [
        {
            id: 'hillshade',
            type: 'hillshade',
            source: 'hillshadeSource',
            paint: {
                'hillshade-method': 'standard',
                'hillshade-illumination-direction': 315,
                'hillshade-shadow-color': '#000000',
                'hillshade-highlight-color': '#FFFFFF',
                'hillshade-accent-color': '#000000',
                'hillshade-exaggeration': 0.5
            }
        }
    ]
};

export const raster = {
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
}