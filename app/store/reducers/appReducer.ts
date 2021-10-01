/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../lib/createReducer';
import * as types from '../../store/actions/types';
import { IMusicListResponse, IFavoriteListRequest } from '../../models/actions/app';
import { AppState } from '../../models/reducers/app';
const initialState: AppState = {
    musicList: [],
    favoriteList: [],
};

export const appReducer = createReducer(initialState, {
    [types.MUSIC_LIST_RESPONSE](state: AppState, action: IMusicListResponse) {
        return {
            ...state,
            musicList: action.response,
        };
    },
    [types.FAVORITE_LIST_REQUEST](state: AppState, action: IFavoriteListRequest) {
        return {
            ...state,
            favoriteList: action.data,
        };
    },
});
