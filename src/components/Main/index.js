import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Header, Footer } from 'components';

export default class Main extends PureComponent {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
