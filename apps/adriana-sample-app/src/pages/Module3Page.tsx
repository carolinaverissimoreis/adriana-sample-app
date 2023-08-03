import { Module3, Module3Props } from '@adriana-org/product-2';

import { useAppDispatch, useAppSelector } from '../store';
import { selectProductsSlice, updateProductsSlice } from '../store/slices';

// -----------------------------------------------------------------

export const Module3Page = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(selectProductsSlice);

  const onSaveName: Module3Props['onSaveName'] = (value) => {
    dispatch(updateProductsSlice({ name: value }));
  };

  return <Module3 name={name} onSaveName={onSaveName} />;
};
