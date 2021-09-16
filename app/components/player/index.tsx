import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useTheme, Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IAppState } from '../../models/reducers/app';
import { IPlayerState } from '../../models/reducers/player';
import Slider from 'react-native-slider';
import { isPlayerPlay } from '../../store/actions/playerActions';
import { useNavigation ,useIsFocused} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { favoriteListRequest } from '../../store/actions/appActions';
import FullPlayer from './PlayerFullScreen';
import PlyerBottom from './PlyerBottom';
import TrackPlayer, {
  Capability,
  useProgress,
  usePlaybackState,
  RepeatMode,
  State,
  Event,
  useTrackPlayerEvents
} from 'react-native-track-player';
interface FooterProps {
  title?: string;
  url?: string;
  trackLength?: any;
  currentPosition?: any;
  onSlidingStart?: any;
  isShowFooter?: Element;
  artwork?: any;
  artist?: any;
}
interface IState {
  appReducer: IAppState;
  playerReducer: IPlayerState;
}
function pad(n: any, width: any, z: any = 0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position: any) => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
];
const Footer: React.FC<any> = (props, isShowFooter): JSX.Element => {
  const selectedTrack: any = useSelector(
    (state: IState) => state.playerReducer.playerList,
  );
  const isPlayerShown = useSelector(
    (state: IState) => state.playerReducer.isPlayer,
  );
  const isPlay = useSelector(
    (state: IState) => state.playerReducer.isPlayerPlay,
  );
  const favoriteList = useSelector(
    (state: IState) => state.appReducer.favoriteList,
  );
  const musicList = useSelector((state: IState) => state.appReducer.musicList);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const { position } = useProgress();
  const [duration, setDuration] = useState(0);
  let trackLength = Math.floor(duration);
  let currentPosition = Math.floor(position);
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  const theme = useTheme();
  const sheetRef = React.useRef(null);
  const playbackState = usePlaybackState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = useStyles();
  const [fullPlayerView, setFullPlayerView] = useState(false);
  const isVisible = useIsFocused();
  useEffect(() => {
    if (isVisible) {
      TrackPlayer.reset();
   
      setup();
    } else {
      TrackPlayer.stop();
      TrackPlayer.reset();
    }
    return () => {
      TrackPlayer.stop();
      TrackPlayer.reset();
    };
  }, [selectedTrack]);
  const setup = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
    });

    await TrackPlayer.add({
      url: selectedTrack?.url,
      title: '1324234',
      artist: 'David Chavez',
      artwork:
        'https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6',
      // duration: startDuration(),
    });
    TrackPlayer.play();
    TrackPlayer.setRepeatMode(RepeatMode.Track);
  };
  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  const onPressPlay = async () => {
    dispatch(isPlayerPlay(true));
    TrackPlayer.play();

    const dur = await TrackPlayer.getDuration();
    // setDuration(dur);
  };
  useEffect(() => {
    isPlayerShown && sheetRef.current.snapTo(0);
    setFullPlayerView(true);
  }, [isPlayerShown]);
  // const filterPlayList =(id: any) => {
  //   let data = pList?.filter((element: any) => element.id != id)
  //   dispatch(playerListRequest(data));
  // };
  const onPressPause = () => {
    dispatch(isPlayerPlay(false));
    TrackPlayer.pause();
  };
  const onTrackItemPress = async (track: any) => {
    await TrackPlayer.stop();
    await TrackPlayer.reset();
  };
  const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
    const currentTrackId = await selectedTrack?.id;
    if (!currentTrackId) return;
    const trkIndex = musicList.findIndex(
      (trk: any) => trk.id == currentTrackId,
    );
    if (prevOrNext === 'next' && trkIndex < musicList.length - 1) {
      onTrackItemPress(musicList[trkIndex + 1]);
    }
    if (prevOrNext === 'prev' && trkIndex > 0) {
      onTrackItemPress(musicList[trkIndex - 1]);
    }
  };
  const onSkipToNext = () => {
    playNextPrev('next');
  };
  const onSkipToPrevious = () => {
    playNextPrev('prev');
  };
  const onFavoritePress = () => {
    let data = favoriteList;
    let found = favoriteList?.find(
      (element: any) => element.id == selectedTrack.id,
    );
    if (!found) {
      data.push(selectedTrack);
      setIsFavorite(true);
      dispatch(favoriteListRequest(data));
    }
  };

  const onRemoveFavoritePress = () => {
    setIsFavorite(false);
    let data = favoriteList?.filter(
      (element: any) => element.id != selectedTrack.id,
    );
    dispatch(favoriteListRequest(data));
  };
  const togglePlayback = async (playbackState: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      // TODO: Perhaps present an error or restart the playlist?
    } else {
      if (playbackState == 'paused') {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  const onForward = () => {
    // playNextPrev('next');
  };
  const onBack = () => {
    // playNextPrev('prev');
  };
  const onSeek = async (value: any) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };
  const onPressRepeat = () => {
    // onPressPlay()
    TrackPlayer.getRepeatMode();
  };
  const onPressShuffle = () => {
    // onPressPlay()
    // TrackPlayer.skipToPrevious();
  };
  const slidingCompleted = async (value: any) => {
    await TrackPlayer.seekTo(value);
  };

  const renderContent = () => {
    return fullPlayerView ? (
      <View style={styles.container}>
        <FullPlayer url={
          selectedTrack?.artwork ||
          `https://picsum.photos/150/200/?random=${Math.random()}`
        }
          title={selectedTrack?.title || 'No Title'}
          artist={selectedTrack?.artist || selectedTrack?.album || 'unknown'}
          isFavorite={isFavorite}
          onFavoritePress={onFavoritePress}
          onRemoveFavoritePress={onRemoveFavoritePress}
          onPressRepeat={onPressRepeat}
          onPressShuffle={onPressShuffle}
          trackLength={Math.floor(duration)}
          track={selectedTrack}
          onPressPlay={onPressPlay}
          onPressPause={onPressPause}
          onForward={onSkipToNext}
          onBack={onSkipToPrevious}
          currentPosition={Math.floor(position)}
          onSeek={slidingCompleted}
          playbackState={playbackState}
          togglePlayback={togglePlayback} />
      </View>
    ) : (
      <PlyerBottom
        img={
          selectedTrack?.artwork ||
          `https://picsum.photos/150/200/?random=${Math.random()}`
        }
        title={selectedTrack?.title || 'No Title'}
        artist={selectedTrack?.artist || selectedTrack?.album || 'unknown'} 
        trackLength={Math.floor(duration)}
        track={selectedTrack}
        onForward={onSkipToNext}
        onBack={onSkipToPrevious}
        currentPosition={Math.floor(position)}
        onSeek={slidingCompleted}
        playbackState={playbackState}
        togglePlayback={togglePlayback}
        sheetRef={sheetRef}
      />
    );
  };
  return (
    <>
  
    <BottomSheet
      ref={sheetRef}
      initialSnap={0}
      snapPoints={['100%', 130, 130]}
      borderRadius={10}
      renderContent={renderContent}
      onOpenEnd={() => setFullPlayerView(true)}
      onCloseEnd={() => setFullPlayerView(false)}
    />
    </>
  );
};

export const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      height: hp('100%'),
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    PlayerBottomcontainer: {
      height: hp('100%'),
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      paddingLeft: 10
    },

    imgcontainer: {
      height: hp('10%'), // 70% of height device screen
      width: wp('10%'),
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 20,
    },
    image: {
      height: hp('10%'), // 70% of height device screen
      width: wp('15%'),
    },
    text: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 5,
    },
    TrackDetailcontainer: {
      width: wp('100%'),
      flexDirection: 'row',
      paddingLeft: 20,
      paddingTop: 5,
      // alignItems: 'center',
      // paddingRight: 20,
    },
    title: {
      fontSize: hp('3%'),
      fontWeight: 'bold',
      // textAlign: 'center',
    },
    artist: {
      fontSize: hp('2%'),
      // marginTop: 4,
    },
    detailsWrapper: {
      paddingLeft: 5,
    },
    // <-------------------------Control Bar styles--------------->
    Controlcontainer: {
      flexDirection: 'row',
      flex: 1,
      padding: 10,
    },
    playButton: {
      height: hp('12%'), // 70% of height device screen
      width: wp('10%'),
      borderRadius: hp('15%') / 2,
    },
    secondaryControl: {
      height: hp('7%'), // 70% of height device screen
      width: wp('10%'),
    },
    off: {
      opacity: 0.3,
    },
    // <-------------------------Track Bar styles--------------->

    slider: {
      marginTop: -12,
      width: '90%',
      height: 40,
    },
    Trackcontainer: {
      height: 20,
      paddingLeft: 2,
      paddingRight: 2,
      backgroundColor: 'transparent',
    },
    track: {
      // width:5,
      height: 3.5,
      borderRadius: 1,
    },
    thumb: {
      height: hp('2.5%'), // 70% of height device screen
      width: wp('4.5%'),
      borderRadius: 10,
    },
   
  });
  return styles;
};
export default Footer;
