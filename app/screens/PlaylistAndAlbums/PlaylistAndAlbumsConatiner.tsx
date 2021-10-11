import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import PlaylistsAlbumsCard from '../../components/Playlist/PlaylistSongs/PlaylistsAlbumsCard';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayList } from '../../store/actions/playerActions';
import SearchBar from '../../components/SearchBar';
import PlaylistAndAlbumsModal from './PlaylistAndAlbumsModal';
import { useEffect } from 'react';
import AppCreatePlaylistModal from '../../components/player/AppCreatePlaylistModal';
import { useNavigation } from '@react-navigation/native';
import PlaylistAndAlbumsShimmer from './PlaylistAndAlbumsShimmer';
import { useTranslation } from 'react-i18next';
import { ReducerState } from '../../models/reducers';
import { MusicProps, PlaylistProps, Track } from './types';

const PlaylistAndAlbumsConatiner: React.FC<MusicProps> = (): JSX.Element => {
    const selectedTrack: PlaylistProps = useSelector(
        (state: ReducerState) => state.playerReducer.playerList,
    );
    const styles = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const playlistRef: any = React.useRef(null);
    const playList = useSelector((state: ReducerState) => state.playerReducer.playList);
    const addPlaylist = false;
    const [updatedPlaylist, setUpdatedPlaylist] = useState<Array<PlaylistProps>>([]);
    const [selectPlaylist, setSelectPlaylist] = useState(null);
    const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
    const isLoader = useSelector((state: ReducerState) => state.loadingReducer?.isLoginLoading);
    const navigation = useNavigation();
    const { t } = useTranslation();

    const addSongToPlaylist = (item: PlaylistProps) => {
        const found = item?.songs.find((el: Track) => el.id === selectedTrack.id);
        const data = item;
        if (!found) data.songs.push(selectedTrack);

        const list: any = playList.map((item: PlaylistProps) => {
            if (item.name === data.name) {
                return data;
            } else {
                return item;
            }
        });

        dispatch(updatePlayList(list));
    };

    const closeAllModals = () => {
        setIsCreateModalVisible(!isCreateModalVisible);
    };

    const setThePlaylist = (item: any) => {
        setSelectPlaylist(item);
    };
    const PlayListRenderItem = ({ item }: { item: PlaylistProps }) => (
        <>
            <TouchableOpacity onPress={() => addSongToPlaylist(item)}>
                <PlaylistsAlbumsCard
                    name={item.name}
                    img={
                        item?.songs.length > 0
                            ? item?.songs[0]?.artwork
                            : `https://picsum.photos/150/200/?random=${Math.random()}`
                    }
                    model={item?.songs?.length}
                    playlistRef={playlistRef}
                    item={item}
                    setThePlaylist={setThePlaylist}
                    onPress={() => {
                        // dispatch(playerListRequest(item));
                        navigation.navigate('Playlist', { item: item });
                    }}
                />
            </TouchableOpacity>
        </>
    );

    const onRefresh = () => {
        // getMusicList();
        if (isLoader) {
            <PlaylistAndAlbumsShimmer />;
        } else {
            <PlaylistAndAlbumsConatiner />;
        }
    };
    useEffect(() => {
        if (playList?.length > 0) {
            setUpdatedPlaylist(playList);
        }
    }, [playList.length]);


    return (
        <>
            <View style={styles.container}>
                <View style={styles.folderContainer}>
                    <SearchBar
                        setUpdatedPlaylist={setUpdatedPlaylist}
                        placeholder={`Search ${playList.length} Playlist`}
                    />

                    <TouchableOpacity style={styles.newListLabel} onPress={() => closeAllModals()}>
                        <View style={{ width: '4%' }} />
                        <Ionicons
                            name="add-circle-outline"
                            style={[styles.secondaryControl, addPlaylist ? styles.on : styles.off]}
                            size={25}
                            color={theme.colors.primary}
                        />
                        <Text style={styles.name}>{t('Create new playlist')}</Text>
                    </TouchableOpacity>

                    <View style={{ paddingLeft: 10 ,marginBottom:'92%'}}>
                        {updatedPlaylist?.length > 0 ? (
                            <FlatList
                                contentContainerStyle={{ alignSelf: 'flex-start' }}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={updatedPlaylist}
                                renderItem={PlayListRenderItem}
                                refreshControl={
                                    <RefreshControl refreshing={isLoader} onRefresh={onRefresh} />
                                }
                            />
                        ) : (
                            <View style={styles.errorContainer}>
                                <Ionicons
                                    name="musical-notes"
                                    style={styles.noMusicIcon}
                                    size={80}
                                />
                                <Text style={styles.noPlaylistText}>
                                    {t('No Playlist or Albums yet')}
                                </Text>
                                <Text style={styles.model}>
                                    Playlist or album you have created will show up here.{' '}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
            <BottomSheet
                ref={playlistRef}
                index={-1}
                snapPoints={[300, 2]}
                backgroundComponent={() => <View style={styles.contentContainer} />}
                handleComponent={() => (
                    <View style={styles.closeLineContainer}>
                        <View style={styles.closeLine} />
                    </View>
                )}>
                <View style={styles.modal}>
                    <PlaylistAndAlbumsModal item={selectPlaylist} playlistRef={playlistRef} />
                </View>
            </BottomSheet>
            <AppCreatePlaylistModal
                closeModals={closeAllModals}
                isCreateModalVisible={isCreateModalVisible}
            />
        </>
    );
};

export default PlaylistAndAlbumsConatiner;
