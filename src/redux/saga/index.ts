import { all } from 'redux-saga/effects';
import PostsSaga from './posts';

export default function* rootSaga() {
  yield all([PostsSaga]);
}
