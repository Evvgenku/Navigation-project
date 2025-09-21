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
    cycle: {
      type: 'raster',
      tiles: [
        'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=39a2634765da436f9bfcc5549dfe15ed'
      ],
      tileSize: 256,
      attribution: '© Thunderforest, © OpenStreetMap contributors'
    }
  },
  layers: [
    {
      id: 'cycle',
      type: 'raster',
      source: 'cycle',
      minzoom: 0,
      maxzoom: 22
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
            'maxzoom': 20
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

// {
//     version: 8,
//     sources: {
//       opentopo: {
//         type: 'raster',
//         tiles: [
//           'https://a.tile.opentopomap.org/{z}/{x}/{y}.png',
//           'https://b.tile.opentopomap.org/{z}/{x}/{y}.png',
//           'https://c.tile.opentopomap.org/{z}/{x}/{y}.png'
//         ],
//         tileSize: 256,
//         attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
//       }
//     },
//     layers: [
//       {
//         id: 'opentopo',
//         type: 'raster',
//         source: 'opentopo',
//         minzoom: 0,
//         maxzoom: 20
//       }
//     ]
//   }