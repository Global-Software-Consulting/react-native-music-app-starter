/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { IPlayerState } from '../../models/reducers/player';

const initialState: IPlayerState = {
  playerList: [],
  isPlayer: false,
  isPlayerPlay: false,
  playList: [],

};

export const playerReducer = createReducer(initialState, {

  //list of selected item that is playing
  [types.PLAYER_LIST_REQUEST](state: IPlayerState, action: any) {
    return {
      ...state,
      playerList: action.payload,
    };
  },

  //Flag for showing bottom player
  [types.ISPLAYER_SHOWN](state: IPlayerState, action: any) {
    // console.log("action.response",action.response);

    return {
      ...state,
      isPlayer: action.payload,

    };
  },

  //Flag for showing playing state in bottom and full screen
  [types.MUSIC_PLAYER_PLAY](state: IPlayerState, action: any) {
    console.log("action.response", action.response);

    return {
      ...state,
      isPlayerPlay: action.payload,

    };
  },

  //Playlist
  [types.ADD_PLAY_LIST](state: IPlayerState, action: any) {
    return {
      ...state,
      playList: action.payload,
    }
  },
  [types.UPDATE_PLAY_LIST](state: IPlayerState, action: any) {
    return {
      ...state,
      playList: action.payload,
    };
  },
  [types.DELETE_PLAY_LIST](state: IPlayerState, action: any) {
    return {
      ...state,
      playList: action.payload,
    }
  },
  [types.DELETE_SONG_IN_PLAYLIST](state: IPlayerState, action: any) {
    return {
      ...state,
      playList: action.payload,
    }
  },


});
