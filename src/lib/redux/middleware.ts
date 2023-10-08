/* Core */
import { pagesApi } from '@/services/pages'
import { portfolioApi } from '@/services/portfolio'
import { postsApi } from '@/services/posts'

const middleware = [
  postsApi.middleware,
  pagesApi.middleware,
  portfolioApi.middleware,
]

export { middleware }