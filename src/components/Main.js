import { default as React, Component } from 'react'
import MapComponent from './MapComponent'
import Shapes from './Heatmap'
export default class SimpleMap extends Component { constructor() {
  super()
  this.state = { data: {} }
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
  // render
  render() {
    return (
     <MapComponent data ={this.state.data} >
      <Shapes data ={this.props.data} />
    </MapComponent>
    )
  }
}
