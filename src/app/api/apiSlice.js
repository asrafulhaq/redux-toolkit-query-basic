import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create api slice
const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => "/api/v1/user",
    }),
    getSingleUser: builder.query({
      query: (id) => `/api/v1/user/${id}`,
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useCreateUserMutation,
} = apiSlice;

export default apiSlice;
