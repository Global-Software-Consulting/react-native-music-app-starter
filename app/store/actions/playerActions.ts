/*
 * Reducer actions related with login
 */
import * as types from './types';

export function playerListRequest(list: any) {
  return {
    type: types.PLAYER_LIST_REQUEST,
    list,
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
export function playListRequest(list: any) {
  console.log("reponsereponsereponsereponsereponse abc:", list);
  return {
    type: types.PLAYER_LIST_REQUEST,
    payload: list,
  };
}
