export interface FavoriteProps {
    id?: string;
    url?: string;
    title?: string;
    album?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
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
export interface PlaylistProps {
    id?: string;
    name: string;
    songs: Song[];
    artwork?: string;
    artist?: string;
    duration?: number;
}

type Song = {
    artwork?: string;
    artist?: string;
    title?: string;
};
