import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import { history } from 'store';
import PATHS from 'constants/paths';
import MainContainer from 'containers/MainContainer';
import HomeContainer from 'containers/HomeContainer';

export default (
  <Router history={history}>
    <Route component={MainContainer} path={PATHS.ROOT} >
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);
