import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (page = 1) => `albums?_page=${page}&_limit=10`,
    }),
  }),
});

export const { useGetAlbumsQuery } = jsonServerApi;
