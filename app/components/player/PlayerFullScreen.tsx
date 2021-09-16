import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../AppHeader';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import useStyles from './styles';
import Album from './Album';
import TrackBar from './TrackBar';
import { useRoute } from '@react-navigation/native';
import TrackPlayer, {
  Capability,
  useProgress,
  usePlaybackState,
  RepeatMode,
  State,
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../../models/reducers/app';
import { IPlayerState } from '../../models/reducers/player';
import { musicListRequest } from '../../store/actions/appActions';
import { playerListRequest } from '../../store/actions/playerActions';
import { favoriteListRequest } from '../../store/actions/appActions';
import { isPlayerShow, isPlayerPlay } from '../../store/actions/playerActions';

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
    url: string;
    artwork?: string;
    artist: string;
    onRemoveFavoritePress:any;
    onFavoritePress:any;
    onPressPlay:any;
    onPressPause:any;
    isFavorite:any;
    onPressRepeat:any;
    onPressShuffle:any;
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
    
  }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Album
        url={url}
        title={title}
        artist={artist}
        isFavorite={isFavorite}
        onFavoritePress={onFavoritePress}
        onRemoveFavoritePress={onRemoveFavoritePress}
        onPressRepeat={onPressRepeat}
        onPressShuffle={onPressShuffle}
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
