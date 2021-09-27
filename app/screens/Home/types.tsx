import { AppState } from '../../models/reducers/app';
import { Loading } from '../../models/reducers/loading';
import { PlayerState } from '../../models/reducers/player';

export interface IState {
    appReducer?: AppState;
    loadingReducer?: Loading;
    musicList?:Array<object>;
  }

  export interface IPState {
    playerReducer?: PlayerState;
    playList:Array<object>;
  
  }
  export interface Itrack {
    id?: string;
    name?:string;
    url?: string;
    title?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
  }
  export interface IPlaylist {
    id?: string;
    name: string;
    songs: song[];
    artwork: string;
    artist: string;
    duration: number;
  }

  type song={
    artwork: string;
  }