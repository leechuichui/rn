/**
 * Created by guowei on 2017/3/5.
 */

import { combineReducers } from 'redux';
import read from './read';
import category from './category';
import routes from './routes';

const rootReducer = combineReducers({
  routes,
  read,
  category
});

export default rootReducer;
