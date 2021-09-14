/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import musicListSaga from './musicListSaga';
import favoriteListSaga from './favoriteListSaga';

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.MUSIC_LIST_REQUEST, musicListSaga),
    // takeEvery(types.FAVORITE_LIST_REQUEST, favoriteListSaga),
   
  ]);
}
