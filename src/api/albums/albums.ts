import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com/albums`,
  }),
  endpoints: (builder) => ({
    getListAlbums: builder.query<any, string>({
      query: (name) => `albums/${name}`,
    }),
  }),
});

export const { useGetListAlbumsQuery } = albumsApi;
