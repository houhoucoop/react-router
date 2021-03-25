import React from 'react'
import { useHistory } from './hooks'

const Link = ({ to, children, ...rest }) => {
  const history = useHistory()

  const handleClick = (e) => {
    e.preventDefault()
    history.push(to)
  }

  return (
    <a {...rest} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link
