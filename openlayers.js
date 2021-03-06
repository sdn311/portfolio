      var openCycleMapLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
          attributions: [
            'All maps © <a href="https://www.opencyclemap.org/">OpenCycleMap</a>',
            ol.source.OSM.ATTRIBUTION
          ],
          url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
              '?apikey=b09b6ad078bd48148c1ed08beebda393'
        })
      });

      var openSeaMapLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
          attributions: [
            'All maps © <a href="http://www.openseamap.org/">OpenSeaMap</a>',
            ol.source.OSM.ATTRIBUTION
          ],
          opaque: false,
          url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png'
        })
      });
      
      var map = new ol.Map({
        layers: [
          openCycleMapLayer,
          openSeaMapLayer
        ],
        target: 'map',
        controls: ol.control.defaults({
          attributionOptions: {
            collapsible: false
          }
        }),
        view: new ol.View({
          maxZoom: 18,
          center: ol.proj.fromLonLat([-28.332091,38.469306]),
          zoom: 10
        })
      });
    
