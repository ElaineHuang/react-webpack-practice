import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import image from 'assets/bear.jpg';
import styles from './styles.css';

export default class Home extends PureComponent {
  render () {
    return (
      <div className={styles.container}>
        <img src={image} alt="images" />
      </div>
    );
  }
}
