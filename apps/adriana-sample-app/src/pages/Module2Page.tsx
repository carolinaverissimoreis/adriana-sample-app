import { useCallback } from 'react';
import { Module2 } from '@adriana-org/product-1';

import { useLazyGetProductsDataQuery } from '../store/apis';
import { useAppSelector } from '../store';
import { selectProductsSlice } from '../store/slices';

// -----------------------------------------------------------------

export const Module2Page = () => {
  const [getProductsData, { isLoading }] = useLazyGetProductsDataQuery();

  const { number, region } = useAppSelector(selectProductsSlice);

  const getData = useCallback(() => {
    getProductsData({ url: `https://restcountries.com/v3.1/currency/cop` });
  }, [getProductsData]);

  return (
    <Module2
      getData={getData}
      isLoadingData={isLoading}
      number={number}
      region={region}
    />
  );
};
