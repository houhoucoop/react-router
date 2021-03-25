import { useContext } from 'react'
import Context from './context'
import { matchPath } from './utils'

export const useHistory = () => useContext(Context).history

export const useLocation = () => useContext(Context).location

export const useMatch = () => useContext(Context).match

export const useParams = () => useContext(Context).params

export const useRouterMatch = (path) => {
  const { pathname } = useLocation()
  const match = useMatch()

  return path ? matchPath(pathname, path) : match
}
