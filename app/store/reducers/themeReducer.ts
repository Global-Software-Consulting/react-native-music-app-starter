/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../lib/createReducer';
import * as types from '../../store/actions/types';

import { ThemeState } from '../../models/reducers/theme';
import { IThemeToggleAction } from '../../models/actions/theme';

const initialState: ThemeState = {
    isDark: false,
};

export const themeReducer = createReducer(initialState, {
    [types.TOGGLE_THEME](state: ThemeState, action: IThemeToggleAction) {
        return { ...state, isDark: action.isDark };
    },
});
