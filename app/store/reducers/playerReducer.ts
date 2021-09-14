/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';

import { IPlayerState } from '../../models/reducers/player';

const initialState: IPlayerState = {
  playerList:[],
  isPlayer:false,
  isPlayerPlay:false,
  
};

export const playerReducer = createReducer(initialState, {
 
  [types.PLAYER_LIST_REQUEST](state: IPlayerState, action:any) {    
    return {
      ...state,
      playerList: action.list,

    };
  },
  [types.ISPLAYER_SHOWN](state: IPlayerState, action:any) {
    // console.log("action.response",action.response);
    
    return {
      ...state,
      isPlayer: action.payload,

    };
  },
  [types.MUSIC_PLAYER_PLAY](state: IPlayerState, action:any) {
    console.log("action.response",action.response);
    
    return {
      ...state,
      isPlayerPlay: action.payload,
      
    };
  },

 
});
