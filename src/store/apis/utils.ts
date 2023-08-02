import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

// TODO: Get this value from env
const baseUrl = "";

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  async prepareHeaders(headers) {
    const token = localStorage.getItem("token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const fetchbase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    console.error(`Error at calling API: `, result.error);
  }

  return result;
};
