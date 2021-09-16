import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useStyles from './styles';
import Slider from 'react-native-slider';
import TrackPlayer, {
  Capability,
  useProgress,
  State,
} from 'react-native-track-player';
import { useSelector, useDispatch } from 'react-redux';
import { IPlayerState } from '../../models/reducers/player';
import { isPlayerShow } from 'app/store/actions/playerActions';
import { widthPercentageToDP } from 'react-native-responsive-screen';

function pad(n: any, width: any, z: any = 0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position: any) => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
];

interface MusicProps {
  name?: string;
  model?: string;
  img?: string;
  trackLength?: any;
  currentPosition?: any;
  onSeek?: any;
  track?: any;
  onPressPlay?: any;
  onBack?: any;
  onPressPause?: any;
  onForward?: any;
  forwardDisabled?: any;
  playbackState: any;
  togglePlayback: any;
}

interface IState {
  playerReducer: IPlayerState;
}

const TrackBar: React.FC<MusicProps> = ({
  trackLength,
  currentPosition,
  onSeek,
  onBack,
  track,
  onForward,
  onPressPause,
  onPressPlay,
  forwardDisabled,
  playbackState,
  togglePlayback,
}) => {
  const theme = useTheme();
  const styles = useStyles();
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  const playerList = useSelector(
    (state: IState) => state.playerReducer.playerList,
  );
  const isPlayerPlay = useSelector(
    (state: IState) => state.playerReducer.isPlayerPlay,
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const addsongs = async () => {
  //     TrackPlayer.add(track);
  //     onPressPlay(track);
  //   };
  //   if (isPlayerPlay) {
  //     addsongs();
  //   }
  // }, []);
  return (
    <>
      <View style={styles.Trackcontainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>{elapsed[0] + ':' + elapsed[1]}</Text>
          <View style={{ flex: 1 }} />
          <Text style={[styles.text, { width: 40 }]}>
            {trackLength > 1 && remaining[0] + ':' + remaining[1]}
          </Text>
        </View>
        <Slider
          maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
          onSlidingComplete={onSeek}
          value={currentPosition}
          style={styles.slider}
          minimumTrackTintColor={'orange'}
          maximumTrackTintColor={theme.colors.background}
          thumbStyle={styles.thumb}
          trackStyle={styles.track}
        />
        <View style={styles.Controlcontainer}>
          <View style={{ width: 5 }} />
          <TouchableOpacity onPress={() => onBack()} style={styles.controlButton}>
            <Ionicons
              name="play-skip-back-outline"
              size={30}
              color={theme.colors.primary}
              onPress={() => onBack()}
            />
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          {playbackState == 'loading' ? (
            <ActivityIndicator
              size="large"
              color="black"
              style={styles.activityIndicator}
            />
          ) : playbackState == 'paused' ? (
            <TouchableOpacity onPress={() => togglePlayback(playbackState)} style={styles.playButton}>
                <Ionicons name="play" size={35} color={theme.colors.primary} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => togglePlayback(playbackState)} style={styles.playButton}>
              
                <Ionicons name="pause" size={35} color={theme.colors.primary} />
             
            </TouchableOpacity>
          )}

          <View style={{ width: 20 }} />
          <TouchableOpacity
            onPress={() => onForward()}
            disabled={forwardDisabled}
            style={styles.controlButton}
            >
            <Ionicons
              name="play-skip-forward-outline"
              size={30}
              style={[forwardDisabled && { opacity: 0.3 }]}
              color={theme.colors.primary}
              onPress={() => onForward()}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TrackBar;
