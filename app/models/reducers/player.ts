export interface PlayerState {
    isPlayer: boolean;
    isPlayerPlay: boolean;
    playerList: any;
    playList: Playlist[];
}
type Playlist = {
    name: string;
    songs: Songs[];
};
type Songs = {
    id?: string;
    title?: string;
    url?: string;
    artwork?: string;
    artist?: string;
};
