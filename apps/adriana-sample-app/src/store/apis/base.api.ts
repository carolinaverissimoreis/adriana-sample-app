import { createApi } from '@reduxjs/toolkit/query/react';

import { fetchbase } from './utils';

export const baseApi = createApi({
  baseQuery: fetchbase,

  refetchOnMountOrArgChange: true,

  tagTypes: ['products'],

  endpoints: () => ({}),
});
