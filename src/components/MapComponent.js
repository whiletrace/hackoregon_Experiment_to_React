import { default as React, Component } from 'react'
import { GoogleMapLoader, GoogleMap, Polygon } from 'react-google-maps'
import Shapes from './Heatmap'
export default class MapComponent extends Component {
 // sets initial state
  render() {
    return (
    <GoogleMapLoader
      containerElement={
      <div
        style={{
          height: '100%',
        }}
      />
     }
      googleMapElement = {
      <GoogleMap
        defaultZoom={13}
        defaultCenter={ { lat: 45.52306220000001, lng: -122.67648159999999 }}
      >
        <Shapes data ={this.props.data} />
      </GoogleMap>
      }
    />
   )
  }
}
MapComponent.propTypes = {
  map: React.PropTypes.object,
  data: React.PropTypes.object,
  running: React.PropTypes.bool,
  monthIndex: React.PropTypes.number,
  hslMaxValue: React.PropTypes.number,
  dataPath: React.PropTypes.string,
  timeIntervalMs: React.PropTypes.number,
  geoJSONPath: React.PropTypes.string,
  monthsArray: React.PropTypes.array,
  hoverStyle: React.PropTypes.object,
}
MapComponent.defaultProps = {
  running: false,
  monthIndex: 0,
  hslMaxValue: 2.0, // this should be the max value in dataset
  dataPath: '/data/neighborhoods.json', // specify json data set here
  timeIntervalMs: 200, // time in milliseconds for each year/month
  geoJSONPath: '/data/neighborhoods.json',  // geojson shapefiles (from zillow)
  monthsArray: [],
  hoverStyle: {
    strokeWeight: 1,
  },
  disabledStyle: {
    strokeWeight: 1,
    fillColor: 'black',
  },
}

