/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../lib/createReducer';
import * as types from '../../store/actions/types';
import {
    PlayerListAction,
    PlayerShow,
    PlayerPlay,
    PlayListAction,
} from '../../models/actions/player';
import { PlayerState } from '../../models/reducers/player';

const initialState: PlayerState = {
    playerList: null,
    isPlayer: false,
    isPlayerPlay: false,
    playList: [],
};

export const playerReducer = createReducer(initialState, {
    //list of selected item that is playing
    [types.PLAYER_LIST_REQUEST](state: PlayerState, action: PlayerListAction) {
        return {
            ...state,
            playerList: action.payload,
        };
    },

    //Flag for showing bottom player
    [types.ISPLAYER_SHOWN](state: PlayerState, action: PlayerShow) {
        return {
            ...state,
            isPlayer: action.payload,
        };
    },

    //Flag for showing playing state in bottom and full screen
    [types.MUSIC_PLAYER_PLAY](state: PlayerState, action: PlayerPlay) {
        return {
            ...state,
            isPlayerPlay: action.payload,
        };
    },

    //Playlist

    [types.UPDATE_PLAY_LIST](state: PlayerState, action: PlayListAction) {
        return {
            ...state,
            playList: action.payload,
        };
    },
    [types.DELETE_PLAY_LIST](state: PlayerState, action: PlayListAction) {
        return {
            ...state,
            playList: action.payload,
        };
    },
    [types.DELETE_SONG_IN_PLAYLIST](state: PlayerState, action: PlayListAction) {
        return {
            ...state,
            playList: action.payload,
        };
    },
});
