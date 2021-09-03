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
  musicList:[]
};

export const appReducer = createReducer(initialState, {
 
  [types.MUSIC_LIST_RESPONSE](state: IAppState, action) {
    return {
      ...state,
      musicList: action.response,
      
    };
  },
 
});
