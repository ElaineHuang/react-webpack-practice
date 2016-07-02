'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';

import './style.scss';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

if(module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />, document.getElementById('app')
)