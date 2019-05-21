import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <div>
    <header className={styles.component}>
      <h2 className={styles.title}>Things to do</h2>
      <img className={styles.image} src="https://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="image" />
    </header>
  </div>
);

export default Hero;
