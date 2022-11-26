import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  tagTypes: ['Albums'],
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (page = 1) => `albums?_page=${page}&_limit=10`,
      providesTags: ['Albums'],
    }),

    createAlbum: builder.mutation({
      query: (title) => ({
        url: `albums`,
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: ['Albums'],
    }),
  }),
});

export const { useGetAlbumsQuery, useCreateAlbumMutation } = jsonServerApi;
