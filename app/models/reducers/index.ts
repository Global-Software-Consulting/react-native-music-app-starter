import { AppState } from './app';
import { Loading } from './loading';
import { PlayerState } from './player';
import { ThemeState } from './theme';

export type ReducerState = {
    playerReducer: PlayerState;
    appReducer: AppState;
    loadingReducer: Loading;
    themeReducer: ThemeState;
};
