import { WORDPRESS_BASE_API, WORDPRESS_POSTS_FIELD_FILTERS, WORDPRESS_POST_FIELD_FILTERS } from '@/utils/common-utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const pagesApi: any = createApi({
  reducerPath: 'pages',
  baseQuery: fetchBaseQuery({ baseUrl: WORDPRESS_BASE_API }),
  extractRehydrationInfo(action, { reducerPath }) {
    if(action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getPages: builder.query({
      query: () => `/pages${WORDPRESS_POSTS_FIELD_FILTERS}`
    }),
    getPage: builder.query({
      query: (slug) => `/pages${WORDPRESS_POST_FIELD_FILTERS}&slug=${slug}`
    })
  })
});

export const { useGetPagesQuery, useGetPageQuery, util: { getRunningQueriesThunk } } = pagesApi;

export const { getPages, getPage } = pagesApi.endpoints;