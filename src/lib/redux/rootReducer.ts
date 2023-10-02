import { pagesApi } from "@/services/pages";
import { postsApi } from "@/services/posts";

export const reducer = {
  [postsApi.reducerPath]: postsApi.reducer,
  [pagesApi.reducerPath]: pagesApi.reducer,
};