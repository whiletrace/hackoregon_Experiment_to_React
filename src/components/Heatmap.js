import { default as React, Component } from 'react'
import { GoogleMapLoader, GoogleMap, Polygon } from 'react-google-maps'
import SimpleMap from './Main'
export default class Shapes extends Component { constructor() {
  super()
}
componentDidMount(){
	debugger
}
 render() {
  return (
   
   <div className = 'Poly'
   data = {this.props.data}>
    
    <h1>
    this is going to be a long dat
    </h1>
    
   </div>
   
  )
 }
}

