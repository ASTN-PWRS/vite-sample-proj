
import {RouteLocationNormalized} from 'vue-router'

const removeQueryParams = (to:RouteLocationNormalized) => {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash }
}

const removeHash = (to:RouteLocationNormalized) => {
  if (to.hash) return { path: to.path, query: to.query, hash: '' }
}
