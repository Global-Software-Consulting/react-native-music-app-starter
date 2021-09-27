export interface AppState {
  musicList: music[];
  favoriteList:Array<object>;
  addFavoriteList:Array<object>;
  removeFavoriteList:Array<object>;
}
type music={
  id?: string;
  name?: string;
  url?: string;
  artwork?: string;
  artist?: string;
  duration?: number;
}