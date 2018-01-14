import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PATHS from 'constants/paths';

export default class Header extends PureComponent {
  render () {
    return (
      <div className="header">
        Header
        <Link to={PATHS.ABOUT}>About</Link>
      </div>
    );
  }
}
