import { useLocation } from './hooks'

const Route = ({ path, children }) => {
  const { pathname } = useLocation()

  return pathname === path ? children : null
}

export default Route
