/*
 * Reducer actions related with login
 */
import * as types from './types';

export function playerListRequest(list: any){
    console.log("reponsereponsereponsereponsereponse abc:", list);
  return {
    type: types.PLAYER_LIST_REQUEST,
    list,
  };
}


// export function playerPause() {
//   return {
//     type: types.MUSIC_PLAYER_PAUSE,
//   };
// }
export function isPlayerPlay(value:boolean) {
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

