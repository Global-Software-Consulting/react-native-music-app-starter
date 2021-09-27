/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import musicListSaga from './musicListSaga';

export default function* watch() {
    yield all([
        takeEvery(types.MUSIC_LIST_REQUEST, musicListSaga),
        // takeEvery(types.FAVORITE_LIST_REQUEST, favoriteListSaga),
    ]);
}
