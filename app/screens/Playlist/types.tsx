export interface Track {
    id?: string;
    url?: string;
    title?: string;
    artist?: string;
    artwork?: string;
    album?: string;
    duration?: number;
}
export interface Favorite {
    id?: string;
    url?: string;
    title?: string;
    artist?: string;
    artwork?: string;
    album?: string;
    duration?: number;
}
export interface PlaylistProps {
    id?: string;
    name?: string;
    title?: string;
    songs?: Song[];
    artwork?: string;
    artist?: string;
    duration?: number;
}

type Song = {
    title?: string;
    artist?: string;
    artwork?: string;
};
export interface MusicProps {
    addPlaylist?: any;
    playlistRef?: any;
    item?: any;
    selectedPlaylist?: any;
}
