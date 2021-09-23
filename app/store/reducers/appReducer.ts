/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';

import { IAppState } from 'models/reducers/app';
const initialState: IAppState = {
  isLoading:true,
  musicList:[],
  favoriteList:[],
};

export const appReducer = createReducer(initialState, {
 
  [types.MUSIC_LIST_RESPONSE](state: IAppState, action:any) {
    return {
      ...state,
      musicList: action.response,
      
    };
  },
  [types.FAVORITE_LIST_REQUEST](state: IAppState, action:any) {
    
    return {
      ...state,
      favoriteList: action.data,
      
    };
  },


 
});
