/*
 * Reducer actions related with login
 */
import * as types from './types';

export function musicListRequest() {
    return {
        type: types.MUSIC_LIST_REQUEST,
    };
}
export function musicListResponse(response: any) {
    return {
        type: types.MUSIC_LIST_RESPONSE,
        response,
    };
}
export function favoriteListRequest(data: any) {
    return {
        type: types.FAVORITE_LIST_REQUEST,
        data,
    };
}
