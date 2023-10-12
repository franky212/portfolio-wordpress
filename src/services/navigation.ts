import { WORDPRESS_BASE_API_MENUS } from '@/utils/common-utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const menusApi: any = createApi({
  reducerPath: 'menus',
  baseQuery: fetchBaseQuery({ baseUrl: WORDPRESS_BASE_API_MENUS }),
  extractRehydrationInfo(action, { reducerPath }) {
    if(action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['Menus'],
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: (slug: string) => `/${slug}`,
      providesTags: ['Menus'],
    }),
  })
});

export const { useGetMenuQuery, util: { getRunningQueriesThunk } } = menusApi;

export const { getMenu } = menusApi.endpoints;