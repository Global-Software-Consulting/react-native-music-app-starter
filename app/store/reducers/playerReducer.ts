/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';

import { IAppState } from 'models/reducers/app';
import {
  ILoginRequestState,
  ILoginResponseState,
} from 'models/actions/login';
const initialState: IAppState = {
  playerList:[],
  
};

export const playerReducer = createReducer(initialState, {
 
  [types.PLAYER_LIST_RESPONSE](state: IAppState, action:any) {
    // console.log("action.response",action.response);
    
    return {
      ...state,
      favoriteList: action.response,
      
    };
  },
  // [types.FAVORITE_LIST_RESPONSE](state: IAppState, action:any) {
  //   // console.log("action.response",action.response);
    
  //   return {
  //     ...state,
  //     favoriteList: action.response,
      
  //   };
  // },

 
});
