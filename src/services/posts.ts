import { WORDPRESS_BASE_API, WORDPRESS_POSTS_FIELD_FILTERS, WORDPRESS_POST_FIELD_FILTERS } from '@/utils/common-utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const postsApi: any = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: WORDPRESS_BASE_API }),
  extractRehydrationInfo(action, { reducerPath }) {
    if(action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['Posts', 'Image', 'Post'],
  endpoints: (builder) => ({
    getPostImage: builder.query({
      query: (imageID) => `/media/${imageID}`,
      providesTags: ['Image'],
    }),
    getPosts: builder.query({
      query: () => `/posts${WORDPRESS_POSTS_FIELD_FILTERS}`,
      providesTags: ['Posts'],
    }),
    getPost: builder.query({
      query: (slug) => `/posts${WORDPRESS_POST_FIELD_FILTERS}&slug=${slug}`,
      providesTags: ['Posts'],
    })
  })
});

export const { useGetPostsQuery, useGetPostQuery, useGetPostImageQuery, util: { getRunningQueriesThunk } } = postsApi;

export const { getPosts, getPost, getPostImage } = postsApi.endpoints;