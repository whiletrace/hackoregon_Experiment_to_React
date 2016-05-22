import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from 'components/Main'
import Heatmap from 'components/Heatmap'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/Heatmap" component={Heatmap} />
  </Router>
), document.getElementById('app'))
