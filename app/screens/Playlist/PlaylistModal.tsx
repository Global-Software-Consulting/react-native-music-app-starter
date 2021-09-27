import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import { PlayerState } from '../../models/reducers/player';
import { AppState } from '../../models/reducers/app';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlayListSong } from '../../store/actions/playerActions';
import { favoriteListRequest } from '../../store/actions/appActions';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import AppCreatePlaylistModal from '../../components/player/AppCreatePlaylistModal';
import AppPlaylistModal from '../../components/player/AppPlaylistModal';

interface MusicProps {
    addPlaylist?: any;
    playlistRef?: any;
    item?: any;
    selectedPlaylist?: any;
}
interface IPState {
    playerReducer: PlayerState;
}
interface IState {
    appReducer: AppState;
}
const PlaylistModal: React.FC<MusicProps> = ({
    addPlaylist,
    playlistRef,
    item,
    selectedPlaylist,
}) => {
    const styles = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const playList = useSelector((state: IPState) => state.playerReducer.playList);
    const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const favoriteList = useSelector((state: IState) => state.appReducer.favoriteList);

    const deleteSongOfPlaylist = (song: any) => {
        const data = selectedPlaylist.songs?.filter((element: any) => element.id !== song.id);

        const updatedList = { name: selectedPlaylist.name, songs: data };
        // console.log("updatedList:",updatedList);
        const updatedPlayLists = playList.map((element: any) => {
            if (element.name === selectedPlaylist.name) {
                return updatedList;
            } else {
                return element;
            }
        });
        // console.log("updatedPlayList:",updatedPlayList);

        dispatch(deletePlayListSong(updatedPlayLists));
    };

    const onFavoritePress = () => {
        Toast.show(`${item.title} Added in favorites`);
        const data = favoriteList;
        const found = favoriteList?.find((element: any) => element.id === item.id);
        if (!found) {
            data.push(item);
            dispatch(favoriteListRequest(data));
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

    return (
        <View style={styles.modalcontainer}>
            <View style={styles.bottomTaskCard}>
                <View style={styles.imgcontainer}>
                    <Image style={styles.img} source={{ uri: item?.artwork }} />
                </View>

                <View style={styles.nameContainer}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.bottomlabel}>{item?.title}</Text>
                        <Text style={styles.artist}>{item?.artist} </Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '15%' }} />
            {/* {showDel && <TouchableOpacity onPress={()=> onPressRemove(name) }> */}
            <ScrollView>
                <View style={styles.bottomModalContainer}>
                    <View style={{ width: '5%' }} />
                    <TouchableOpacity
                        onPress={() => {
                            playlistRef.current.snapToIndex(1);
                            deleteSongOfPlaylist(item);
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons
                                name="playlist-remove"
                                style={[
                                    styles.secondaryControl,
                                    addPlaylist ? styles.on : styles.off,
                                ]}
                                size={30}
                                color={theme.colors.primary}
                            />
                            <Text style={styles.iconName}>Remove playlist</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomModalContainer}>
                    <View style={{ width: '5%' }} />
                    <TouchableOpacity
                        onPress={() => {
                            playlistRef.current.snapToIndex(1);
                            onFavoritePress();
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons
                                name="heart"
                                style={[
                                    styles.secondaryControl,
                                    addPlaylist ? styles.on : styles.off,
                                ]}
                                size={30}
                                color={theme.colors.primary}
                            />
                            <Text style={styles.iconName}>Liked Songs</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomModalContainer}>
                    <View style={{ width: '5%' }} />
                    <TouchableOpacity
                        onPress={() => {
                            playlistRef.current.snapToIndex(1);
                            onPressPlaylist();
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons
                                name="playlist-plus"
                                style={[
                                    styles.secondaryControl,
                                    addPlaylist ? styles.on : styles.off,
                                ]}
                                size={30}
                                color={theme.colors.primary}
                            />
                            <Text style={styles.iconName}>Add to Playlist</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        </View>
    );
};

export default PlaylistModal;
