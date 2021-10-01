/*
 * Reducer actions related with login
 */
import * as types from './types';
import { PlayerList } from '../../models/actions/player';

export function playerListRequest(item: PlayerList) {
    return {
        type: types.PLAYER_LIST_REQUEST,
        payload: item,
    };
}
export function isPlayerPlay(value: boolean) {
    return {
        type: types.MUSIC_PLAYER_PLAY,
        payload: value,
    };
}
export function isPlayerShow(value: boolean) {
    return {
        type: types.ISPLAYER_SHOWN,
        payload: value,
    };
}

export function updatePlayList(item: Array<PlayerList>) {
    return {
        type: types.UPDATE_PLAY_LIST,
        payload: item,
    };
}
export function deletePlayListFolder(item: Array<PlayerList>) {
    return {
        type: types.DELETE_PLAY_LIST,
        payload: item,
    };
}
export function deletePlayListSong(playlist: Array<PlayerList>) {
    return {
        type: types.DELETE_SONG_IN_PLAYLIST,
        payload: playlist,
    };
}
