import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Test from './AppContainer'

// import Catelog from './Catalog'
// import Featured from './Featured'
// import Articles from './Articles'
// import About from './About'

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/catalog" component={Test} />

          <Test />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
