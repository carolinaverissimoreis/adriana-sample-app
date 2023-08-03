import { Select } from 'antd';

import { useAppDispatch, useAppSelector } from '../../../../store';
import {
  ProductsSliceState,
  selectProductsSlice,
  updateProductsSlice,
} from '../../../../store/slices';
import './style.scss';

// -----------------------------------------------------------------

export const ProductCategorySwitcher = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(selectProductsSlice);

  const handleChange = (category: ProductsSliceState['category']) => {
    dispatch(updateProductsSlice({ category }));
  };

  return (
    <Select
      value={category}
      options={[
        { value: 'product1', label: 'Product 1' },
        { value: 'product2', label: 'Product 2' },
      ]}
      onChange={handleChange}
      bordered={false}
      className="product-category-switcher"
    />
  );
};
