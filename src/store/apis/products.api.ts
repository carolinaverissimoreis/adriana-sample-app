import { baseApi } from "./base.api";

/**
 * Create APIs
 */
export const productsApi = baseApi.injectEndpoints({
  overrideExisting: false,

  endpoints: (build) => {
    /**
     * Get products
     */
    const getProducts = build.query<GetProductsRes, GetProductsReq>({
      query: (params) => {
        return {
          url: `/products`,
          params,
        };
      },
      providesTags: ["products"],
    });

    /**
     * Return
     */
    return {
      getProducts,
    };
  },
});

/**
 * Hooks
 */
export const { useLazyGetProductsQuery } = productsApi;

/**
 * Types
 * TODO: Get rid of using any
 */
export type GetProductsRes = any;

export type GetProductsReq = any;
