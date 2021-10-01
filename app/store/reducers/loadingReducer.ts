/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../lib/createReducer';
import * as types from '../../store/actions/types';
import { Loading } from '../../models/reducers/loading';

const initialState: Loading = {
    isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
    [types.MUSIC_ENABLE_LOADER](state: Loading) {
        return { ...state, isLoginLoading: true };
    },
    [types.MUSIC_DISABLE_LOADER](state: Loading) {
        return { ...state, isLoginLoading: false };
    },
});
