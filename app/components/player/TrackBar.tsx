import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import useStyles from './styles';
import Slider from 'react-native-slider';
import { useDispatch, useSelector } from 'react-redux';
import TrackPlayer, { Capability, useProgress, State } from "react-native-track-player";

function pad(n: any, width: any, z: any = 0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position: any) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

interface MusicProps {
  name?: string,
  model?: string,
  img?: string,
  trackLength?: any,
  currentPosition?: any,
  onSeek?: any,
  onSlidingStart?: any,
  paused?: any,
  track?: any,
  onPressPlay?: any,
  onPressPause?: any,
  onBack?: any,
  onForward?: any,
  forwardDisabled?: any,
}

const TrackBar: React.FC<MusicProps> = ({
  trackLength,
  currentPosition,
  onSeek,
  track,
  onSlidingStart,
  paused,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  forwardDisabled,
}) => {
  console.log('[o[p[p[p[p[p[p', currentPosition);
  console.log('duration', trackLength);

  const theme = useTheme();
  const styles = useStyles();
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);

  useEffect(() => {
    const addsongs = async () => {
       TrackPlayer.add(track);
      console.log('useEffect addsongs');
      onPressPlay();
    }
    addsongs();
  }, []);

    // if (paused && trackLength == 0) {
    //   console.log(' if (trackLength == 0) ')
    //   onPressPlay();
    // }

   
  return (
    <>
      <View style={styles.Trackcontainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>
            {elapsed[0] + ":" + elapsed[1]}
          </Text>
          <View style={{ flex: 1 }} />
          <Text style={[styles.text, { width: 40 }]}>
            {trackLength > 1 && remaining[0] + ":" + remaining[1]}
          </Text>
        </View>
        <Slider
          maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
          onSlidingStart={onSlidingStart}
          onSlidingComplete={onSeek}
          value={currentPosition}
          style={styles.slider}
          minimumTrackTintColor={theme.colors.primary}
          maximumTrackTintColor={theme.colors.background}
          thumbStyle={styles.thumb}
          trackStyle={styles.track} />
        <View style={styles.Controlcontainer}>

          <View style={{ width: 30 }} />
          <TouchableOpacity onPress={() => onBack()}>
            <Ionicons
              name="play-skip-back-outline"
              size={30}
              color={theme.colors.primary}
              onPress={() => onBack()}
            />
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          {paused ?
            <TouchableOpacity onPress={() => onPressPause()}>
              <View style={styles.playButton}>
                <Ionicons
                  name="pause"
                  size={35}
                  color={theme.colors.primary}
                />
              </View>
            </TouchableOpacity> :
            <TouchableOpacity onPress={() => onPressPlay()}>
              <View style={styles.playButton}>
                <Ionicons
                  name="play"
                  size={35}
                  color={theme.colors.primary}
                />
              </View>
            </TouchableOpacity>
          }
          <View style={{ width: 20 }} />
          <TouchableOpacity onPress={() => onForward()}
            disabled={forwardDisabled}>
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



