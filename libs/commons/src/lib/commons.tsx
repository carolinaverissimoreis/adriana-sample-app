import styles from './commons.module.scss';

/* eslint-disable-next-line */
export interface CommonsProps {}

export function Commons(props: CommonsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Commons!</h1>
    </div>
  );
}

export default Commons;
