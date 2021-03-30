# react-router

> A simple react router implementation

[![NPM](https://img.shields.io/npm/v/react-router.svg)](https://www.npmjs.com/package/react-router) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @houhoucoop/react-router
```

## Usage

```jsx
import React from 'react'
import { Router, Switch, Route, Link } from 'react-router'

const App = () => {
  return (
    <>
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/story'>Story</Link></li>
          <li><Link to='/about/houhou'>About Houhou</Link></li>
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
```

## License

MIT © [@houhoucoop](https://github.com/@houhoucoop)
