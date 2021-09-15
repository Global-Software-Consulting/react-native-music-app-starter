import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, RefreshControl } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import useStyles from './styles';
import Album from '../../components/player/Album';
import TrackBar from '../../components/player/TrackBar';
import { useRoute } from '@react-navigation/native';
import TrackPlayer, { Capability, useProgress } from "react-native-track-player";
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

const Player: React.FC<any> = (props): JSX.Element => {
  const musicList = useSelector((state: IState) => state.appReducer.musicList);
  const favoriteList = useSelector((state: IState) => state.appReducer.favoriteList);
  const [selectedTrack, setSelectedTrack] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const isVisible = useIsFocused()
  const [duration, setDuration] = useState(0);
  const route: any = useRoute();
  const item: any = route.params.item;
  const [paused, setPaused] = useState<boolean>(false);
  const navigation = useNavigation();
  const styles = useStyles();
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const { position } = useProgress();
  const dispatch = useDispatch();

  const trackPlayerInit = async () => {
    TrackPlayer.updateOptions({
      stopWithApp: true, // false=> music continues in background even when app is closed
      // Media controls capabilities
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],

      // Capabilities that will show up when the notification is in the compact form on Android
      compactCapabilities: [Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,

      ],
    });

    await TrackPlayer.setupPlayer();
    return true;

  };

  useEffect(() => {
    dispatch(isPlayerShow(false));

  }, [isVisible]);
  useEffect(() => {
    onTrackItemPress(item);
    dispatch(playerListRequest(item));
    const startPlayer = async () => {
      await trackPlayerInit();
    }
    startPlayer();

    let found = favoriteList?.find((element: any) => element.id == item.id)
    if (found) {
      setIsFavorite(true)     
    } else {
      setIsFavorite(false)
    }

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


  const onTrackItemPress = async (track: any) => {
    await TrackPlayer.stop();
    await TrackPlayer.reset();
    setSelectedTrack(track);
  };

  const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
    const currentTrackId = await selectedTrack?.id;
    if (!currentTrackId) return;
    const trkIndex = musicList.findIndex((trk: any) => trk.id == currentTrackId);
    if (prevOrNext === 'next' && trkIndex < musicList.length - 1) {
      onTrackItemPress(musicList[trkIndex + 1]);
    }
    if (prevOrNext === 'prev' && trkIndex > 0) {
      onTrackItemPress(musicList[trkIndex - 1]);
    }
  };
  const onPressPlay = async (track: any) => {
    dispatch(isPlayerPlay(true))
    TrackPlayer.play();
    setPaused(true);
    // filterPlayList(track);

    // setPosition(pos)
    const dur = await TrackPlayer.getDuration();
    setDuration(dur);

  };

  const onPressPause = () => {
    TrackPlayer.pause();
    setPaused(false);
    dispatch(isPlayerPlay(false))
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
    playNextPrev('next');
  };
  const onSkipToPrevious = () => {
    playNextPrev('prev');
  };


  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async (value: any) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  const onFavoritePress = () => {
    
    let data = favoriteList;
    console.log('onFavoritePress ininininininin',data);
    let found = favoriteList?.find((element: any) => element.id == selectedTrack.id)
    if (!found) {
      data.push(selectedTrack);
      setIsFavorite(true);
      console.log('data.data.data.data',data);
      dispatch(favoriteListRequest(data));
    }

  };

  const onRemoveFavoritePress = () => {
    setIsFavorite(false);
    let data = favoriteList?.filter((element: any) => element.id != selectedTrack.id)
    dispatch(favoriteListRequest(data));
  };
  return (

    <View style={styles.container}>
      <AppHeader
        renderLeft={<LeftArrowIcon
          name="keyboard-arrow-left"
          style={styles.icon}
          size={30}
          onPress={() => {
            dispatch(isPlayerShow(true));
            navigation.navigate('Home')
          }}
        />}
        title="Playing Now"
      />
      <Album url={selectedTrack?.artwork || `https://picsum.photos/150/200/?random=${Math.random()}`}
        title={selectedTrack?.title || 'No Title'} artist={selectedTrack?.artist || selectedTrack?.album || 'unknown'}
        isFavorite={isFavorite}
        onFavoritePress={onFavoritePress}
        onRemoveFavoritePress={onRemoveFavoritePress}
        onPressRepeat={onPressRepeat}
        onPressShuffle={onPressShuffle} />
      {selectedTrack && <TrackBar
        trackLength={Math.floor(duration)}
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
