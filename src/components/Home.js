import styles from './Home.module.css';

const Home = () => (
  <div className={styles.parentDiv}>
    <h1 className={styles.heading}>
      Welcome to our page
    </h1>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dt</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm</p>
    </div>
  </div>
);

export default Home;
