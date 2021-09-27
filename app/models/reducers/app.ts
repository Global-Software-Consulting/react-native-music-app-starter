export interface AppState {
    musicList: Music[];
    favoriteList: Favorites[];
    addFavoriteList: AddFavorites[];
    removeFavoriteList: RemoveFavorites[];
}
type Music = {
    id?: string;
    name?: string;
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
