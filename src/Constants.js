export const nbMap = {  
  running: false,
  monthIndex: 0,
  hslMaxValue : 2.0, // this should be the max value in dataset
  dataPath: '/data/zillow_zri.json', // specify json data set here
  timeIntervalMs:  200, // time in milliseconds for each year/month
  geoJSONPath : '/data/neighborhoods.json',  // geojson shapefiles (from zillow)
  monthsArray : [],
  googleMapParams : {
    zoom: 12,
    panControl: true,
    zoomControl: true,
    center: new google.maps.LatLng(45.52306220000001,-122.67648159999999),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{stylers: [{saturation: -100}]}],
    disableDefaultUI: true
  },
  hoverStyle:{        
    strokeWeight: 1,
  },
  disabledStyle : {    
    strokeWeight: 1,
    fillColor: "transparent"
  }
};


export const boxOptions = {
        content: labelDiv,
        id : e.feature.H.REGIONID,
        boxStyle: {
          border: "none",
          textAlign: "center",
          fontSize: "16px",
          width: "50px"
        },
        disableAutoPan: true,
        pixelOffset: new google.maps.Size(-25, 0),
        position: bounds.getCenter(), // method to find center of bounding rectangle
        closeBoxURL: "",
        isHidden: false,
        pane: "mapPane",
        enableEventPropagation: true
      }