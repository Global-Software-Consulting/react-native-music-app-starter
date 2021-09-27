import { AppState } from '../../models/reducers/app';
import { Loading } from '../../models/reducers/loading';
import { PlayerState } from '../../models/reducers/player';

export interface IState {
    appReducer?: AppState;
    loadingReducer?: Loading;
    musicList?: Music[];
}

export interface IPState {
    playerReducer?: PlayerState;
    playList: Playlist[];
}
export interface Itrack {
    id?: string;
    name?: string;
    url?: string;
    title?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
}
export interface IPlaylist {
    id?: string;
    name: string;
    songs: Song[];
    artwork: string;
    artist: string;
    duration: number;
}

type Song = {
    artwork: string;
};
type Music = {
    id?: string;
    name?: string;
    url?: string;
    title?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
};
type Playlist = {
    id?: string;
    name?: string;
    songs?: Tracks[];
};

type Tracks = {
    artwork?: string;
    artist?: string;
    duration?: number;
    title?: string;
    url?: string;
};
