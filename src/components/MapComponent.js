import { default as React, Component } from 'react'
import ReactDom from 'react-dom'
import { GoogleMapLoader, GoogleMap, Polygon } from 'react-google-maps'
import Shapes from './Heatmap'
export default class MapComponent extends Component { constructor() {
 // sets initial state
  super()
}
  
 // render
  render() {
    return (
      //this this starts google-react-maps
     <GoogleMapLoader
     //container element div for the map 
       containerElement={
        <div
         style={{
            height: '100%',
          }}
        />
       }
       googleMapElement = {
       /*google map react component with properties has access to the json data via the Data prop also added a call to the geo json these are set in the  default props*/
        <GoogleMap
	      defaultZoom={13}
	      defaultCenter={ { lat: 45.52306220000001, lng: -122.67648159999999 }} > 
            <Shapes data ={this.props.data}/>


          
      </GoogleMap>
       }
     />
  )
  }
  // default properties for the map
}
MapComponent.propTypes = {
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