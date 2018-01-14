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
import AboutContainer from 'containers/AboutContainer';

export default (
  <Router history={history}>
    <MainContainer>
      <Switch>
        <Route path={PATHS.ABOUT} component={AboutContainer} />
        <Route path={PATHS.ROOT} component={HomeContainer} />
      </Switch>
    </MainContainer>
  </Router>
);
