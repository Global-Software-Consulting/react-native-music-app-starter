export interface Track {
    id?: string;
    url?: string;
    title?: string;
    artist?: string;
    artwork?: string;
    album?: string;
    duration?: number;
}
export interface Favorites {
    id?: string;
    name?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
}
export interface PlaylistProps {
    id?: string;
    name?: string;
    title?: string;
    songs?: Song[] | undefined | any;
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
    name?: string;
    model?: string | number | undefined;
    image?: string;
    url?: any;
    onPress?: any;
    isFavorite?: any;
    title?: string;
    artist?: string;
    onRemoveFavoritePress?: any;
    onFavoritePress?: any;
    onTitlePress?: any;
    onArtistPress?: any;
    onPressShuffle?: any;
    shuffleOn?: any;
    onPressRepeat?: any;
    repeatOn?: any;
    onPressPlaylist?: any;
    isModalVisible?: any;
    isCreateModalVisible?: boolean;
    closeModals?: any;
    onPressNewPlaylist?: any;
    img?: string;
    setSong?: any;
    item?: any;
    playlistRef?: string | any;
    setThePlaylist?: any;
    onPressRemove?: any;
    addSongToPlaylist?: any;
    // playbackState?:any;
    // togglePlayback?:any;
}
export interface PlyerFullScreenProps {
    name?: string;
    model?: string;
    img?: string;
    trackLength?: any;
    currentPosition?: any;
    onSeek?: any;
    track?: any;
    onBack?: any;
    onForward?: any;
    playbackState: any;
    togglePlayback: any;
    title: string;
    url?: string;
    artwork?: string;
    artist?: string;
    onRemoveFavoritePress?: any;
    onFavoritePress?: any;
    onPressPlay?: any;
    onPressPause?: any;
    isFavorite?: any;
    onPressRepeat?: any;
    onPressShuffle?: any;
    sheetRef?: any;
    repeatOn?: any;
    isModalVisible?: any;
    onPressPlaylist?: any;
}

export interface TrackMusicProps {
    name?: string;
    model?: string;
    img?: string;
    trackLength?: any;
    currentPosition?: any;
    onSeek?: any;
    track?: any;
    onBack?: any;
    onForward?: any;
    playbackState: any;
    togglePlayback: any;
    title?: string;
    url?: any;
    artist?: string;
    sheetRef?: any;
    forwardDisabled?: any;
}

export interface AppHeaderProps {
    title?: string;
    renderLeft?: Element;
}
export interface TitleProps {
    title?: string;
    setUpdatedPlaylist?: any;
    placeholder?: any;
    Playlist?: any;
    onFocus?: any;
}
