import React from 'react'
import { Router, Switch, Route, Link } from 'react-router'
import About from './About'
import 'react-router/dist/index.css'

const App = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/story'>Story</Link>
          </li>
          <li>
            <Link to='/about/houhou'>About Houhou</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/'>Home</Route>
          <Route path='/story'>Story</Route>
          <Route path='/about/:id'>
            <About />
          </Route>
          <Route>No match</Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
