import styles from './page.module.scss';

const Loader = () => {
  return (
    <div className={styles.main}>
    <div className={styles.body}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className={styles.base}>
        <span></span>
        <div className={styles.face}></div>
      </div>
      <div className={styles.longfazers}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className={styles.h1}>Loading</h1>
    </div>
    </div>
  );
};

export default Loader;