/* Core */
import { pagesApi } from '@/services/pages'
import { postsApi } from '@/services/posts'

const middleware = [
  postsApi.middleware,
  pagesApi.middleware,
]

export { middleware }