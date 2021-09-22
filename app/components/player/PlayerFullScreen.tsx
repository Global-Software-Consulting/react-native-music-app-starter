import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import useStyles from './styles';
import Album from './Album';
import TrackBar from './TrackBar';
import { IAppState } from '../../models/reducers/app';
import { IPlayerState } from '../../models/reducers/player';


interface IState {
  appReducer: IAppState;
  playerReducer: IPlayerState;
}
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
  repeatOn:any,
  addPlaylist:any,
  onPressPlaylist:any,
  onPressNewPlaylist:any,

}

interface IState {
  playerReducer: IPlayerState;
}

const PlayerFullScreen: React.FC<PlyerFullScreenProps> = ({
  title,
  url,
  artwork,
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
  addPlaylist,
  onPressPlaylist,
  onPressNewPlaylist,
}) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', flexDirection: 'row', width: '100%', marginBottom: 30 }}>
        <TouchableOpacity
          style={styles.line}
        ></TouchableOpacity>

        <TouchableOpacity style={{ justifyContent: 'flex-end' }} onPress={ () => {
            sheetRef.current.snapTo(1)}}>
          <DownArrowIcon name='downcircle' size={50} color={'lightgray'} style={styles.Dropicon} />
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
        addPlaylist={addPlaylist}
        onPressPlaylist={onPressPlaylist}
        onPressNewPlaylist={onPressNewPlaylist}
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