import React, { useEffect, useState } from 'react';
import {  View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../models/reducers/app';
import { PlayerState } from '../../models/reducers/player';
import { isPlayerPlay, playerListRequest } from '../../store/actions/playerActions';
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
} from 'react-native-track-player';
import AppPlaylistModal from './AppPlaylistModal';
import AppCreatePlaylistModal from './AppCreatePlaylistModal';

interface IState {
    appReducer: AppState;
    playerReducer: PlayerState;
}

const Footer: React.FC<any> = (): JSX.Element => {
    const item: any = useSelector((state: IState) => state.playerReducer.playerList);
    const isPlayerShown = useSelector((state: IState) => state.playerReducer.isPlayer);
    const favoriteList = useSelector((state: IState) => state.appReducer.favoriteList);
    const musicList: any = useSelector((state: IState) => state.appReducer.musicList);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [repeatOn, setRepeatOn] = useState<boolean>(false);
    const sheetRef = React.useRef(null);
    const playbackState = usePlaybackState();
    const dispatch = useDispatch();
    const styles = useStyles();
    const { position, duration } = useProgress();
    const [index, setIndex] = useState(0);
    useEffect(() => {
        TrackPlayer.reset();
        setup();
    }, []);

    useEffect(() => {
        const setup = async () => {
            await TrackPlayer.setupPlayer({});
            await TrackPlayer.updateOptions({
                stopWithApp: true,
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                ],
                compactCapabilities: [Capability.Play, Capability.Pause,Capability.SkipToNext,Capability.SkipToPrevious,]
            });
            await TrackPlayer.add(musicList);
            if (item) {
                onTrackItemPress(item);
            }
        };

      //  TrackPlayer.reset();
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
            ],
            compactCapabilities: [Capability.Play, Capability.Pause,Capability.SkipToNext,     Capability.SkipToPrevious,
            ],
        });
        await TrackPlayer.add(musicList);
        if (item) {
            onTrackItemPress(item);
        }
    };

    const onTrackItemPress = async (track: any) => {
        if (track.id !== item.id) {
            dispatch(playerListRequest(track));
        }
       await TrackPlayer.stop();
       // await TrackPlayer.reset();
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
        const trkIndex = musicList.findIndex((trk: any) => trk.id === currentTrackId);
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
    };

    const togglePlayback = async (playbackState: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack === null) {
            // TODO: Perhaps present an error or restart the playlist?
        } else {
            if (playbackState === 'paused' || playbackState===2) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    const onPressPause = () => {
        TrackPlayer.pause();
        dispatch(isPlayerPlay(false));
    };

    const onPressRepeat = () => {
        if (repeatOn) {
            TrackPlayer.setRepeatMode(RepeatMode.Off);

            setRepeatOn(!repeatOn);
        } else {
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
        Toast.show('Added in favorites');
        const data = favoriteList;
        const found = favoriteList?.find((element: any) => element.id === item.id);
        if (!found) {
            data.push(item);
            setIsFavorite(true);
            dispatch(favoriteListRequest(data));
        }
    };

    const onRemoveFavoritePress = () => {
        setIsFavorite(false);
        const data = favoriteList?.filter((element: any) => element.id !== item.id);
        dispatch(favoriteListRequest(data));
    };
    return (
        <>
            <BottomSheet
                ref={sheetRef}
                // backgroundStyle={<View style={}></View>}
                index={isPlayerShown ? index : -1}
                snapPoints={[130, '100%']}
                onChange={(index) => {
                    setIndex(index);
                }}
                backgroundComponent={() => <View style={styles.contentContainer} />}
                handleComponent={() => (
                    <View style={styles.closeLineContainer}>
                        <View style={styles.closeLine} />
                    </View>
                )}>
                {index === 1 ? (
                    <View style={styles.Indexcontainer}>
                        {item && (
                            <FullPlayer
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
                    </View>
                ) : (
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
                )}
            </BottomSheet>
            {createModalVisible && (
                <AppCreatePlaylistModal
                    closeModals={closeAllModals}
                    isCreateModalVisible={createModalVisible}
                />
            )}
            {isModalVisible && (
                <AppPlaylistModal
                    isModalVisible={isModalVisible}
                    onPressPlaylist={closeAllModals}
                    onPressNewPlaylist={onPressCreatePlaylist}
                />
            )}
        </>
    );
};

export default Footer;
