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
export function musicListResponse(response) {
  return {
    type: types.MUSIC_LIST_RESPONSE,
    response,
  };
}
