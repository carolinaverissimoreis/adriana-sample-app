import styles from './product-2.module.scss';

/* eslint-disable-next-line */
export interface Product2Props {}

export function Product2(props: Product2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Product2!</h1>
    </div>
  );
}

export default Product2;
