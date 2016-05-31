import { default as React, Component } from 'react'
import ReactDom from 'react-dom'
import MapComponent from './MapComponent'
import Shapes from './Heatmap'
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
      url: '/data/neighborhoods.json',
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
  
 // render
  render() {
    return (
     <div className ={'App'}
      
      style={{ height: '100%'}}
      >
          
      <MapComponent data = {this.state}> >
     
      </MapComponent>
     </div>
   
 
    
  )
  }
  // default properties for the map
}
