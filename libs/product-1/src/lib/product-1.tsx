import styles from './product-1.module.scss';

/* eslint-disable-next-line */
export interface Product1Props {}

export function Product1(props: Product1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Product1!</h1>
    </div>
  );
}

export default Product1;
