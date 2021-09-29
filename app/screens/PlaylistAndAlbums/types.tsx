export interface Music {
    id?: string;
    url?: string;
    title?: string;
    album?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
}

export interface Track {
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
export interface Track {
    id?: string;
    name?: string;
    url?: string;
    title?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
}

