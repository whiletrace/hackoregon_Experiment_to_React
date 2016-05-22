import { default as React, Component } from 'react'
import { GoogleMapLoader, GoogleMap, Data, Marker } from 'react-google-maps'
import Heatmap from './Heatmap'
// creates  the component
export default class SimpleMap extends Component { constructor() {
 // sets initial state
  super()
  this.state = { data: [] }
  //loads the data in a react lifecyle method componentDidMount
}
  componentDidMount() {
    $.ajax({
      dataType: 'json',
      url: this.props.dataPath,
      // if the data loads it is set as state of the component
      success: function success(data) {
        this.setState({ data: data })
      }.bind(this),
      // if not this happens
      error: function failure(xh, status, err) {
        console.log('error getting data')
        console.log(status, err.toString())
      },
    })
  }
  // lifecycle method to clean up after the data call
  componentWillUnmount() {
    this.req.abort()
  }
 // render
  render() {
    return (
      //this this starts google-react-maps
     <GoogleMapLoader
     //container element div for the map 
       containerElement={
        <div
          {...this.props}
          style={{
            height: '100%',
          }}
        />
       }
       googleMapElement = {
       /*google map react component with properties has access to the json data via the Data prop also added a call to the geo json these are set in the  default props*/
        <GoogleMap
          Data= {this.state}
          geojson= {this.props.geoJSONPath}
          defaultZoom={13}
          defaultCenter={ { lat: 45.52306220000001, lng: -122.67648159999999 }} 
        > 
        <Heatmap Data ={this.state} />
      </GoogleMap>
       }
     />
  )
  }
  // default properties for the map
}
SimpleMap.propTypes = {
  running: React.PropTypes.bool,
  monthIndex: React.PropTypes.number,
  hslMaxValue: React.PropTypes.number,
  dataPath: React.PropTypes.string,
  timeIntervalMs: React.PropTypes.number,
  geoJSONPath: React.PropTypes.string,
  monthsArray: React.PropTypes.array,
  hoverStyle: React.PropTypes.object,
}
SimpleMap.defaultProps = {
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
