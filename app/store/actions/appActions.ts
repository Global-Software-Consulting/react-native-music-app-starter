/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ILoginResponse } from 'models/api/login';

export function musicListRequest() {
  return {
    type: types.MUSIC_LIST_REQUEST,
  };
}
export function musicListResponse(response:any) {
  // console.log("reponsereponsereponsereponsereponse:", response.data.data);
  
  return {
    type: types.MUSIC_LIST_RESPONSE,
    response,
  };

}
export function favoriteListRequest(data:any) {
  return {
    type: types.FAVORITE_LIST_REQUEST,
data,
  };
}
export function favoriteListResponse(response:any) {
  return {
    type: types.FAVORITE_LIST_RESPONSE,
    response,
  };
}
export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}