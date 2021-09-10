import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, RefreshControl } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import { useNavigation } from '@react-navigation/native';
import useStyles from './styles';
import Album from '../../components/player/Album';
import TrackBar from '../../components/player/TrackBar';
import { useRoute } from '@react-navigation/native';
import TrackPlayer, { Capability, useProgress } from "react-native-track-player";
import {  useSelector } from 'react-redux';
import { IAppState } from '../../models/reducers/app';


interface IState {
  appReducer: IAppState;
}

const Player: React.FC<any> = (props): JSX.Element => {
  const musicList = useSelector((state: IState) => state.appReducer.musicList);

  const trackPlayerInit = async () => {
    TrackPlayer.updateOptions({
      stopWithApp: false, // false=> music continues in background even when app is closed
      // Media controls capabilities
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],

      // Capabilities that will show up when the notification is in the compact form on Android
      compactCapabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,

      ],
    });

    await TrackPlayer.setupPlayer();
    return true;

  };

  const [selectedTrack, setSelectedTrack] = useState<any>(null);

  const [duration, setDuration] = useState(0);

  const route: any = useRoute();
  const item: any = route.params.item;
  const [paused, setPaused] = useState<boolean>(false);

  const navigation = useNavigation();
  const styles = useStyles();
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const { position } = useProgress();
  // const durations = Math.floor(duration);
  // const position = progress.position;
  
  useEffect(() => {
    onTrackItemPress(item);
    const startPlayer = async () => {
      await trackPlayerInit();
    }
    startPlayer();
  }, []);
  //this hook updates the value of the slider whenever the current position of the song changes
  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  // useEffect(() => {
  //   const startDuration = async() => {
  //     console.log('startDuration useefct');
  //     const dur = await TrackPlayer.getDuration();
  //     setDuration(dur);
  //   }
  //   startDuration();

  // }, [paused]);

console.log('paused',paused);

  const onTrackItemPress = async (track: any) => {
    await TrackPlayer.stop();
    await TrackPlayer.reset();
    console.log('heheheheh', track);
    
    setSelectedTrack(track);
  };

  const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
    // const currentTrackId = await TrackPlayer.getCurrentTrack();
    const currentTrackId = await selectedTrack?.id;
    console.log('currentTrackId', currentTrackId);

    if (!currentTrackId) return;
    const trkIndex = musicList.findIndex((trk: any) => trk.id == currentTrackId);

    if (prevOrNext === 'next' && trkIndex < musicList.length - 1) {
      onTrackItemPress(musicList[trkIndex + 1]);
    }
    if (prevOrNext === 'prev' && trkIndex > 0) {
      onTrackItemPress(musicList[trkIndex - 1]);
    }
  };


  const onPressPlay = async () => {
    console.log('onPressPlay');
    TrackPlayer.play();
    setPaused(true);

    // setPosition(pos)
    const dur = await TrackPlayer.getDuration();
    setDuration(dur);

  };
  const onPressPause = () => {
    TrackPlayer.pause();
    setPaused(false);
  };
  const onPressRepeat = () => {
    // onPressPlay()
    // TrackPlayer.RepeatMode.Off();

  };
  const onPressShuffle = () => {
    // onPressPlay()
    // TrackPlayer.skipToPrevious();
  };
  const onSkipToNext = () => {
    playNextPrev('next')
  };
  const onSkipToPrevious = () => {
    playNextPrev('prev')
  };


  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async (value: any) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };
  
  return (

    <View style={styles.container}>
      <AppHeader
        renderLeft={<LeftArrowIcon
          name="keyboard-arrow-left"
          style={styles.icon}
          size={30}
          onPress={() => navigation.navigate('Home')}
        />}
        title="Playing Now"
      />
      <Album url={selectedTrack?.artwork || `https://picsum.photos/150/200/?random=${Math.random()}`}
        title={selectedTrack?.title || 'No Title'} artist={selectedTrack?.artist || selectedTrack?.album || 'unknown'}
        onPressRepeat={onPressRepeat}
        onPressShuffle={onPressShuffle} />
      {selectedTrack && <TrackBar
        trackLength={Math.floor(duration)}
        paused={paused}
        track={selectedTrack}
        onPressPlay={onPressPlay}
        onPressPause={onPressPause}
        onForward={onSkipToNext}
        onBack={onSkipToPrevious}
        currentPosition={Math.floor(position)}
        onSeek={slidingCompleted}
      />}
    </View>


  );
};

export default Player;
