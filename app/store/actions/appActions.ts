/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ReducerState } from '../../models/reducers/index';
// import {AppState} from '../../models/reducers/app';
import { Favorite } from '../../models/actions/app';
export function musicListRequest() {
    return {
        type: types.MUSIC_LIST_REQUEST,
    };
}
export function musicListResponse(response: ReducerState) {
    return {
        type: types.MUSIC_LIST_RESPONSE,
        response,
    };
}
export function favoriteListRequest(data: Array<Favorite> | undefined) {
    return {
        type: types.FAVORITE_LIST_REQUEST,
        data,
    };
}
