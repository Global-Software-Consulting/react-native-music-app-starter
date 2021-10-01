interface Playerlist {
    id?: string;
    name?: string;
    title?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
}

export interface PlayerList {
    id?: string;
    name?: string;
    title?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
}
export interface PlayerListAction {
    type?: string;
    payload?: Playerlist[] | string | number;
}

export interface PlayerShow {
    type: string;
    payload: boolean;
}
export interface PlayerPlay {
    type: string;
    payload: boolean;
}
interface Playerlist {
    id?: string;
    name?: string;
    song?: Song[];
}
type Song = {
    id?: string;
    title?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
};
export interface PlayListAction {
    type: string;
    payload: Playerlist[] | string | number;
}
