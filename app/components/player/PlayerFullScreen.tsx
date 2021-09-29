import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import useStyles from './styles';
import Album from './Album';
import TrackBar from './TrackBar';

interface PlyerFullScreenProps {
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
    artist: string;
    onRemoveFavoritePress: any;
    onFavoritePress: any;
    onPressPlay: any;
    onPressPause: any;
    isFavorite: any;
    onPressRepeat: any;
    onPressShuffle: any;
    sheetRef: any;
    repeatOn: any;
    isModalVisible: any;
    onPressPlaylist: any;
}

const PlayerFullScreen: React.FC<PlyerFullScreenProps> = ({
    title,
    url,
    artist,
    trackLength,
    currentPosition,
    onSeek,
    onBack,
    track,
    onForward,
    playbackState,
    togglePlayback,
    onRemoveFavoritePress,
    onFavoritePress,
    onPressPlay,
    onPressPause,
    isFavorite,
    onPressRepeat,
    onPressShuffle,
    sheetRef,
    repeatOn,
    isModalVisible,
    onPressPlaylist,
}) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <View
                style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    marginBottom: 30,
                }}>
                <TouchableOpacity style={styles.line} />

                <TouchableOpacity
                    style={{ justifyContent: 'flex-end' }}
                    onPress={() => {
                        sheetRef.current.snapToIndex(0);
                    }}>
                    <DownArrowIcon
                        name="downcircle"
                        size={50}
                        color={'lightgray'}
                        style={styles.Dropicon}
                    />
                </TouchableOpacity>
            </View>
            <Album
                url={url}
                title={title}
                artist={artist}
                isFavorite={isFavorite}
                onFavoritePress={onFavoritePress}
                onRemoveFavoritePress={onRemoveFavoritePress}
                onPressRepeat={onPressRepeat}
                onPressShuffle={onPressShuffle}
                repeatOn={repeatOn}
                isModalVisible={isModalVisible}
                onPressPlaylist={onPressPlaylist}
            />
            <TrackBar
                trackLength={trackLength}
                track={track}
                onPressPlay={onPressPlay}
                onPressPause={onPressPause}
                onForward={onForward}
                onBack={onBack}
                currentPosition={currentPosition}
                onSeek={onSeek}
                playbackState={playbackState}
                togglePlayback={togglePlayback}
            />
        </View>
    );
};

export default PlayerFullScreen;
