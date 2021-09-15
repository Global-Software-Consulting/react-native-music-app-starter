import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, RefreshControl, TouchableOpacity } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import useStyles from './styles';
import Album from '../../components/player/Album';
import TrackBar from '../../components/player/TrackBar';
import { useRoute } from '@react-navigation/native';
import TrackPlayer, {
  Capability,
  useProgress,
  usePlaybackState,
  RepeatMode,
  State,
  Event,
  useTrackPlayerEvents
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

const Player: React.FC<any> = (props): JSX.Element => {
  const musicList = useSelector((state: IState) => state.appReducer.musicList);
  const favoriteList = useSelector(
    (state: IState) => state.appReducer.favoriteList,
  );
  const [selectedTrack, setSelectedTrack] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const isVisible = useIsFocused();
  // const [duration, setDuration] = useState(0);
  const route: any = useRoute();
  const item: any = route.params.item;
  const [paused, setPaused] = useState<boolean>(false);
  const navigation = useNavigation();
  const styles = useStyles();
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const { position, duration } = useProgress();
  const dispatch = useDispatch();
  const playbackState = usePlaybackState();

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
      url: item?.url,
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
    if (isVisible) {
      dispatch(isPlayerShow(false));
      TrackPlayer.reset();
      setSelectedTrack(item)
      setup();
    } else {
      TrackPlayer.stop();
      TrackPlayer.reset();
    }
    return () => {
      TrackPlayer.stop();
      TrackPlayer.reset();

    }
  }, [isVisible]);
  // useEffect(() => {
  //   dispatch(isPlayerShow(false));
  // }, [isVisible]);
  useEffect(() => {
    onTrackItemPress(item);
    dispatch(playerListRequest(item));

    let found = favoriteList?.find((element: any) => element.id == item.id);
    if (found) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);
  const onTrackItemPress = async (track: any) => {
    setSelectedTrack(track)
    await TrackPlayer.stop();
    await TrackPlayer.reset();
    await TrackPlayer.add({
      url: track?.url,
      title: '1324234',
      artist: 'David Chavez',
      artwork:
        'https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6',
    });
    TrackPlayer.play();
    TrackPlayer.setRepeatMode(RepeatMode.Queue);
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
  const onPressPlay = async (track: any) => {
    dispatch(isPlayerPlay(true));
    TrackPlayer.play();
    setPaused(true);

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

  const onPressPause = () => {
    TrackPlayer.pause();
    setPaused(false);
    dispatch(isPlayerPlay(false));
  };
  const onPressRepeat = () => {
    // onPressPlay()
    // TrackPlayer.RepeatMode();
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
    await TrackPlayer.seekTo(value);
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
  const [trackArtwork, setTrackArtwork] = useState<string | number>();
  const [trackTitle, setTrackTitle] = useState<string>();
  const [trackArtist, setTrackArtist] = useState<string>();

  useTrackPlayerEvents(
    [
      Event.PlaybackQueueEnded,
      Event.PlaybackTrackChanged,
      Event.RemotePlay,
      Event.RemotePause,
    ],
    async event => {
      if (
        event.type === Event.PlaybackTrackChanged &&
        event.nextTrack !== undefined
      ) {
        const track = await TrackPlayer.getTrack(event.nextTrack);
        const { title, artist, artwork } = track || {};
        setTrackTitle(title);
        setTrackArtist(artist);
        setTrackArtwork(artwork);
      } else if (event.type === Event.RemotePause) {
        TrackPlayer.pause();
      } else if (event.type === Event.RemotePlay) {
        TrackPlayer.play();
      } else if (event.type === Event.PlaybackQueueEnded) {
      }
    },
  );
  return (
    <View style={styles.container}>
      <AppHeader
        renderLeft={
          <TouchableOpacity
            style={{ paddingHorizontal: 20 }}
            onPress={() => {
              dispatch(isPlayerShow(true));
              navigation.navigate('Home');
            }}>
            <LeftArrowIcon
              name="keyboard-arrow-left"
              style={styles.icon}
              size={30}

            />
          </ TouchableOpacity>
        }
        title="Playing Now"
      />
      <Album
        url={
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
      />
      {selectedTrack && (
        <TrackBar
          trackLength={Math.floor(duration)}
          track={selectedTrack}
          onPressPlay={onPressPlay}
          onPressPause={onPressPause}
          onForward={onSkipToNext}
          onBack={onSkipToPrevious}
          currentPosition={Math.floor(position)}
          onSeek={slidingCompleted}
          playbackState={playbackState}
          togglePlayback={togglePlayback}
        />
      )}
    </View>
  );
};

export default Player;
