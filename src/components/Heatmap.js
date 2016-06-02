import { default as React, Component } from 'react'
export default class Shapes extends Component {
  componentDidUpdate() {
    const map = this.props.mapHolderRef.props.map
    return map.data.addGeoJson(this.props.data)
  }
  render() {
    return <div />
  }
}

