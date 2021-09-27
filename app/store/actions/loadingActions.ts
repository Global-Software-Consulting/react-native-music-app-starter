/*
 * Reducer actions related with login
 */
import * as types from './types';

export function enableLoader() {
    return {
        type: types.MUSIC_ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: types.MUSIC_DISABLE_LOADER,
    };
}
