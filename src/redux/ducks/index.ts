import { combineReducers } from '@reduxjs/toolkit';
import postsDuck from './postsDuck';
import requestDuck from './requestDuck';

export default combineReducers({
  posts: postsDuck,
  request: requestDuck,
});
