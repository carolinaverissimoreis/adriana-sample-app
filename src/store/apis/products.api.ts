import { baseApi } from "./base.api";

/**
 * Create APIs
 */
export const productsApi = baseApi.injectEndpoints({
  overrideExisting: false,

  endpoints: (build) => {
    /**
     * Get data
     */
    const getProductsData = build.query<GetProductsRes, GetProductsReq>({
      query: ({ url }) => {
        return { url };
      },
      transformResponse: (res: any) => {
        if (res && res?.length > 0) {
          return { data: res[0] };
        }

        return { data: null };
      },
      providesTags: ["products"],
    });

    /**
     * Return
     */
    return {
      getProductsData,
    };
  },
});

/**
 * Hooks
 */
export const { useLazyGetProductsDataQuery } = productsApi;

/**
 * Types
 * TODO: Get rid of using any
 */
export type GetProductsRes = any;

export type GetProductsReq = {
  url: string;
};
