import { WORDPRESS_BASE_API } from '@/utils/common-utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const portfolioApi: any = createApi({
  reducerPath: 'portfolio',
  baseQuery: fetchBaseQuery({ baseUrl: WORDPRESS_BASE_API }),
  extractRehydrationInfo(action, { reducerPath }) {
    if(action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['Portfolio'],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => `/projects`,
      providesTags: ['Portfolio'],
    }),
    getProject: builder.query({
      query: (id) => `/projects/${id}`,
      providesTags: ['Portfolio'],
    })
  })
});

export const { useGetProjectsQuery, useGetProjectQuery, util: { getRunningQueriesThunk } } = portfolioApi;

export const { getProjects, getProject } = portfolioApi.endpoints;