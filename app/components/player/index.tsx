import React, { useEffect, useState } from 'react';
import { View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../../models/reducers/app';
import { IPlayerState } from '../../models/reducers/player';
import { isPlayerPlay, playerListRequest } from '../../store/actions/playerActions';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { favoriteListRequest } from '../../store/actions/appActions';
import FullPlayer from './PlayerFullScreen';
import PlyerBottom from './PlyerBottom';
import useStyles from './styles';
import Toast from 'react-native-simple-toast';
import TrackPlayer, {
  Capability,
  useProgress,
  usePlaybackState,
  RepeatMode,
  State,
  Event,
  useTrackPlayerEvents
} from 'react-native-track-player';
import AppPlaylistModal from './AppPlaylistModal';
import AppCreatePlaylistModal from './AppCreatePlaylistModal';

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
  const item: any = useSelector(
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

  const musicList: any = useSelector((state: IState) => state.appReducer.musicList);
  const [isFavorite, setIsFavorite] = useState<boolean>(true);
  const [paused, setPaused] = useState<boolean>(false);
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [repeatOn, setRepeatOn] = useState<boolean>(false);
  const sheetRef = React.useRef(null);
  const playbackState = usePlaybackState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = useStyles();
  const isVisible = useIsFocused();
  const { position, duration } = useProgress();
  const [index, setIndex] = useState(0)  
  useEffect(() => {

    TrackPlayer.reset();
    setup();
    // let found = favoriteList?.find((element: any) => element.id == item.id);
    // if (found ) {
    //   setIsFavorite(true);
    // } else {
    //   setIsFavorite(false);
    // }
  }, []);

  useEffect(() => {

    TrackPlayer.reset();
    setup();
  }, [item]);

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
    await TrackPlayer.add(musicList);
    if (item) {
      onTrackItemPress(item);
    }

  };

  const onTrackItemPress = async (track: any) => {
    if (track.id != item.id) {
      dispatch(playerListRequest(track));
    }
    await TrackPlayer.stop();
    await TrackPlayer.reset();
    await TrackPlayer.add({
      url: track?.url,
      title: track?.title,
      artist: track?.artist,
      artwork: track?.artwork,
    });
    TrackPlayer.play();

  };

  const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
    const currentTrackId = await item?.id;
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

  const onPressPlay = async () => {
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
    if (repeatOn) {
      TrackPlayer.setRepeatMode(RepeatMode.Off)

      setRepeatOn(!repeatOn);


    }
    else {

      setRepeatOn(!repeatOn);
      TrackPlayer.setRepeatMode(RepeatMode.Track);

    }

  };

  const onPressPlaylist = () => {
    setModalVisible(true);
    setCreateModalVisible(false);
  };
  const onPressCreatePlaylist = () => {
    setModalVisible(false);
    setTimeout(() => {
      setCreateModalVisible(true);
    }, 400);
  };

  const closeAllModals = () => {
    setModalVisible(false);
    setCreateModalVisible(false);
  }


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
 
    Toast.show('Added in favorites');
    let data = favoriteList;
    let found = favoriteList?.find(
      (element: any) => element.id == item.id,
    );
    if (!found) {
      data.push(item); 
      setIsFavorite(true);
      dispatch(favoriteListRequest(data));
    }
   
  };

  const onRemoveFavoritePress = () => {
    setIsFavorite(false);
    let data = favoriteList?.filter(
      (element: any) => element.id != item.id,
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
    async (event: any) => {
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
    <>
      <BottomSheet
        ref={sheetRef}
        // backgroundStyle={<View style={}></View>}
        index={isPlayerShown ? index : -1}
        snapPoints={[130, '100%']}
        onAnimate={(fromIndex: number, toIndex: number) => {
          setIndex(toIndex)

        }}
        onChange={(index) => {
          setIndex(index)
        }}
        backgroundComponent={() =>
          <View style={styles.contentContainer} />
        }
        handleComponent={() =>
          <View style={styles.closeLineContainer}>
            <View style={styles.closeLine}></View>
          </View>
        }

      >

        {index == 1 ? <View style={styles.Indexcontainer}>
          {item && (<FullPlayer
            url={
              item?.artwork ||
              `https://picsum.photos/150/200/?random=${Math.random()}`
            }
            title={item?.title || 'No Title'}
            artist={item?.artist || item?.album || 'unknown'}
            isFavorite={isFavorite}
            onFavoritePress={onFavoritePress}
            onRemoveFavoritePress={onRemoveFavoritePress}
            onPressRepeat={onPressRepeat}
            onPressShuffle={onPressShuffle}
            trackLength={Math.floor(duration)}
            track={item}
            onPressPlay={onPressPlay}
            isModalVisible={isModalVisible}
            onPressPause={onPressPause}
            onForward={onSkipToNext}
            onBack={onSkipToPrevious}
            currentPosition={Math.floor(position)}
            onSeek={slidingCompleted}
            playbackState={playbackState}
            togglePlayback={togglePlayback}
            sheetRef={sheetRef}
            repeatOn={repeatOn}
            onPressPlaylist={onPressPlaylist}
          />
          )}
        </View> :
          <PlyerBottom
            img={
              item?.artwork ||
              `https://picsum.photos/150/200/?random=${Math.random()}`
            }

            title={item?.title || 'No Title'}
            artist={item?.artist || item?.album || 'unknown'}
            trackLength={Math.floor(duration)}
            track={item}
            onForward={onSkipToNext}
            onBack={onSkipToPrevious}
            currentPosition={Math.floor(position)}
            onSeek={slidingCompleted}
            playbackState={playbackState}
            togglePlayback={togglePlayback}
            sheetRef={sheetRef}
          />
        }
      </BottomSheet>
      {createModalVisible && <AppCreatePlaylistModal
        closeModals={closeAllModals}
        isCreateModalVisible={createModalVisible}
      />}
      {isModalVisible && <AppPlaylistModal
        isModalVisible={isModalVisible}
        onPressPlaylist={closeAllModals}
        onPressNewPlaylist={onPressCreatePlaylist}
      />}

    </>
  );
};

export default Footer;
