import { pagesApi } from "@/services/pages";
import { portfolioApi } from "@/services/portfolio";
import { postsApi } from "@/services/posts";

export const reducer = {
  [postsApi.reducerPath]: postsApi.reducer,
  [pagesApi.reducerPath]: pagesApi.reducer,
  [portfolioApi.reducerPath]: portfolioApi.reducer,
};