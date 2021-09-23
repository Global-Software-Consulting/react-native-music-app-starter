/*
 * Reducer actions related with login
 */
import * as types from './types';

export function playerListRequest(item: any) {
  return {
    type: types.PLAYER_LIST_REQUEST,
    payload:item,
  };
}
export function isPlayerPlay(value: boolean) {
  return {
    type: types.MUSIC_PLAYER_PLAY,
    payload: value
  };

}
export function isPlayerShow(value: boolean) {

  return {
    type: types.ISPLAYER_SHOWN,
    payload: value

  };

}


export function updatePlayList(item: any) {
  return {
    type: types.UPDATE_PLAY_LIST,
    payload: item,
  };
}
export function deletePlayListFolder(item: any) {
  return {
    type: types.DELETE_PLAY_LIST,
    payload: item,
  };
}
export function deletePlayListSong(playlist: any) {
  return {
    type: types.DELETE_SONG_IN_PLAYLIST,
    payload: playlist,
  };
}

