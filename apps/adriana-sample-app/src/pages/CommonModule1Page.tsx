import { CommonModule1 } from '@adriana-org/commons';

import { useAppSelector } from '../store';
import { selectProductsSlice } from '../store/slices';

// -----------------------------------------------------------------

export const CommonModule1Page = () => {
  const { name } = useAppSelector(selectProductsSlice);

  return <CommonModule1 name={name} />;
};
