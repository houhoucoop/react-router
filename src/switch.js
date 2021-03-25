import { Children, isValidElement, cloneElement } from 'react'
import { useLocation, useMatch } from './hooks'
import { matchPath } from './utils'

const Switch = ({ children }) => {
  const location = useLocation()
  const contextMatch = useMatch()

  let element
  let computedMatch = null

  Children.forEach(children, (child) => {
    if (computedMatch === null && isValidElement(child)) {
      element = child
      computedMatch = child.props.path
        ? matchPath(location.pathname, child.props.path)
        : contextMatch
    }
  })
  return computedMatch
    ? cloneElement(element, { location, computedMatch })
    : null
}

export default Switch
