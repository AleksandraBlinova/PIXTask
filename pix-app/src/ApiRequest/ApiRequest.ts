import React from 'react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from './product.type';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (builder) => ({
      getProducts: builder.query<IProduct[], number>({
        query: (limit=5) => `products/`,
      }),
     
    }),
  });
   
export const {useGetProductsQuery} = api


