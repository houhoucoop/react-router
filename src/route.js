import React from 'react'
import { useLocation } from './hooks'
import Context from './context'
import { matchPath } from './utils'

const Route = ({ path, children, computedMatch }) => {
  const { pathname } = useLocation()
  const match = computedMatch || matchPath(pathname, path)

  return (
    <Context.Provider value={match}>{match ? children : null}</Context.Provider>
  )
}

export default Route
