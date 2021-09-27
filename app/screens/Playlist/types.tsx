import { AppState } from '../../models/reducers/app';
import { Loading } from '../../models/reducers/loading';
import { PlayerState } from '../../models/reducers/player';

export interface IState {
  appReducer: AppState;
  loadingReducer: Loading;
}
export interface Itrack {

  id?: string,
  url?: string,
  title?: string,
  artist?: string,
  artwork?: string,
  album?: string,
  duration?: number,
}
export interface IPState {
  playerReducer: PlayerState;

}
export interface IPlaylist {
  id?: string;
  name?: string;
  songs?: song[];
  artwork?: string;
  artist?: string;
  duration?: number;
}

type song={
  artwork?: string;
}