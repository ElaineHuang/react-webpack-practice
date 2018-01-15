import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PATHS from 'constants/paths';
import styles from './header.scss';

export default class Header extends PureComponent {
  render () {
    return (
      <div className={styles.header}>
        <Link className={styles[this.props.pathname === PATHS.ROOT ? 'link-active' : 'link']} to={PATHS.ROOT}>Home</Link>
        <Link className={styles[this.props.pathname === PATHS.ABOUT ? 'link-active' : 'link']} to={PATHS.ABOUT}>About</Link>
      </div>
    );
  }
}
