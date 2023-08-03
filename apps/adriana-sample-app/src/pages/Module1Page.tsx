import { Module1, Module1Props } from '@adriana-org/product-1';

import { useAppDispatch, useAppSelector } from '../store';
import { selectProductsSlice, updateProductsSlice } from '../store/slices';

// -----------------------------------------------------------------

export const Module1Page = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(selectProductsSlice);

  const onSaveName: Module1Props['onSaveName'] = (value) => {
    dispatch(updateProductsSlice({ name: value }));
  };

  return <Module1 name={name} onSaveName={onSaveName} />;
};
