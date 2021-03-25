import { pathToRegexp } from 'path-to-regexp'

const matchPath = (pathname, path) => {
  const keys = []
  const regexp = pathToRegexp(path, keys)
  const match = regexp.exec(pathname)

  if (!match) return null

  const [url, ...values] = match
  const isRoot = path === '/' && url === ''

  const params = keys.reduce((acc, key, index) => {
    acc[key.name] = values[index]
    return acc
  }, {})

  return {
    params,
    url: isRoot ? '/' : url
  }
}

export { matchPath }
