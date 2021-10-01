export interface AppState {
    musicList?: MusicList[] | undefined;
    favoriteList?: Favorites[];
    addFavoriteList?: AddFavorites[];
    removeFavoriteList?: RemoveFavorites[];
}
type MusicList = {
    id?: string;
    name?: string;
    title?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
};
type Favorites = {
    id?: string;
    name?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
};
type AddFavorites = {
    id?: string;
    name?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
};
type RemoveFavorites = {
    id?: string;
    name?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
};
