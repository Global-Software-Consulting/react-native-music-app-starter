import React from 'react';
import { View, TouchableOpacity, Button, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from 'react-native-modal';
import AppHeader from '../AppHeader';
import PlaylistSongsCard from '../Playlist/PlaylistSongs/PlaylistSongsCard';
import { PlayerState } from '../../models/reducers/index';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayList, deletePlayListFolder } from '../../store/actions/playerActions';
import Toast from 'react-native-simple-toast';

interface MusicProps {
    isModalVisible?: any;
    onPressPlaylist?: any;
    onPressNewPlaylist?: any;
}
interface IPState {
    playerReducer: PlayerState;
}
const AppPlaylistModal: React.FC<MusicProps> = ({
    isModalVisible,
    onPressPlaylist,
    onPressNewPlaylist,
}) => {
    const styles = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const playList = useSelector((state: IPState) => state.playerReducer.playList);
    const selectedTrack: any = useSelector((state: IPState) => state.playerReducer.playerList);

    const addSongToPlaylist = (item: any) => {
        Toast.show(`Added in ${item.name} Playlist`);
        const found = item.songs.find((el: any) => el.id === selectedTrack.id);
        const data = item;
        if (!found) data.songs.push(selectedTrack);
        const list = playList.map((item: any) => {
            if (item.name === data.name) {
                return data;
            } else {
                return item;
            }
        });

        dispatch(updatePlayList(list));
    };

    const removePlaylist = (name: any) => {
        const data = playList?.filter((element: any) => element.name !== name);
        dispatch(deletePlayListFolder(data));
    };

    const PlayListRenderItem = ({ item }: any) => (
        <>
            <TouchableOpacity key={item} onPress={() => addSongToPlaylist(item)}>
                <PlaylistSongsCard
                    name={item.name}
                    model={item?.songs?.length}
                    img={
                        item.songs.length > 0
                            ? item.songs[0].artwork
                            : `https://picsum.photos/150/200/?random=${Math.random()}`
                    }
                    onPressRemove={removePlaylist}
                    showDel={true}
                    addSongToPlaylist={addSongToPlaylist}
                />
            </TouchableOpacity>
        </>
    );

    return (
        <>
            <View style={styles.container}>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.ModalContainer}>
                        <AppHeader renderLeft={<Text style={styles.label}>Add To Playlist</Text>} />

                        <TouchableOpacity
                            style={styles.newListLabel}
                            onPress={() => onPressNewPlaylist()}>
                            <Text style={styles.name}>Create new playlist</Text>
                            <View style={{ width: '30%' }} />
                            <TouchableOpacity onPress={() => onPressNewPlaylist()}>
                                <MaterialCommunityIcons
                                    name="playlist-plus"
                                    style={[styles.secondaryControl, styles.off]}
                                    size={30}
                                    color={theme.colors.primary}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <View style={styles.folderContainer}>
                            {playList?.length > 0 ? (
                                <FlatList
                                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={playList}
                                    renderItem={PlayListRenderItem}
                                />
                            ) : (
                                <View style={styles.container}>
                                    <Text style={styles.model}>Playlist Empty</Text>
                                </View>
                            )}
                        </View>
                    </View>
                    <Button title="Cancel" onPress={() => onPressPlaylist()} />
                </Modal>
            </View>
        </>
    );
};

export default AppPlaylistModal;
