import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import Featured from './Featured'
import Articles from './Articles'
import About from './About'
import AppContainer from './AppContainer'
import styled from '@emotion/styled'

// wrapper for switching lights
const Wrapper = styled('div')`
  background: ${props => props.theme.background};
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
  Typography {
    color: ${props => props.theme.body};
  }
`

export default () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/nav_Featured" component={Featured} />
            <Route path="/nav_Articles" component={Articles} />
            <Route path="/nav_About" component={About} />
            <Route path="/nav_Catalog" component={AppContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    </Wrapper>
  )
}
