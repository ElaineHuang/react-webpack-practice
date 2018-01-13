import React from 'react';
import {
  Router,
  Route,
  Switch,
  IndexRoute,
} from 'react-router-dom';
import { history } from 'store';
import PATHS from 'constants/paths';
import MainContainer from 'containers/MainContainer';
import HomeContainer from 'containers/HomeContainer';

export default (
  <Router history={history}>
    <Switch>
      <MainContainer>
        <Route path={PATHS.ROOT} component={HomeContainer} />
      </MainContainer>
    </Switch>
  </Router>
);
