/*
 * Reducer actions related with login
 */
import * as types from './types';

export function playerListRequest(payload: any) {
    console.log("reponsereponsereponsereponsereponse:", payload);

  return {
    type: types.PLAYER_LIST_REQUEST,
    payload,
  };
}
export function playerListResponse(response: any) {
  // console.log("reponsereponsereponsereponsereponse:", response.data.data);

  return {
    type: types.PLAYER_LIST_RESPONSE,
    response,
  };

}
export function playerPause() {
  return {
    type: types.MUSIC_PLAYER_PAUSE,
  };
}
export function playerPlay() {

  return {
    type: types.MUSIC_PLAYER_PLAY,

  };

}

