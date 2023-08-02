import { Middleware } from "redux";

import { productsApi } from "./apis";

export const appMiddleware: Middleware<any>[] = [productsApi.middleware];
