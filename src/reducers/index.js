import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ui from './ui';

export default combineReducers({
  routing,
  ui,
});
