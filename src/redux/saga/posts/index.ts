import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import { getPosts } from 'api';
import { fetchPosts } from 'redux/ducks/postsDuck';

function* handleFetchPosts(action: unknown) {
  try {
    console.log('aaa');
    // @ts-ignore
    const posts = yield call(getPosts);
    yield put({
      type: 'GET_POSTS_SUCCESS',
      payload: posts,
    });
  } catch (e) {
    yield put({
      type: 'GET_POSTS_FAILED',
      // @ts-ignore
      message: e.message,
    });
  }
}

function* fetchPostsAction() {
  yield takeEvery(fetchPosts, handleFetchPosts);
}

export default function* watchAll() {
  yield all([fork(fetchPostsAction)]);
}
