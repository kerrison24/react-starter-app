import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Greetings from './components/Greetings'
import MyPage from './components/page/MyPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="/page" component={MyPage} />
  </Route>
)
