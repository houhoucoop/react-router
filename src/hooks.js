import { useContext } from 'react'
import RouterContext from './context'

export const useHistory = () => useContext(RouterContext).history
export const useLocation = () => useContext(RouterContext).location
