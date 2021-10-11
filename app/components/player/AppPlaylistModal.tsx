import React from 'react';
import { View, TouchableOpacity, Button, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from 'react-native-modal';
import AppHeader from '../AppHeader';
import PlaylistSongsCard from '../Playlist/PlaylistSongs/PlaylistSongsCard';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayList, deletePlayListFolder } from '../../store/actions/playerActions';
import Toast from 'react-native-simple-toast';
import { MusicProps, PlaylistProps, Track } from './types';
import { ReducerState } from '../../models/reducers';

const AppPlaylistModal: React.FC<MusicProps> = ({
    isModalVisible,
    onPressPlaylist,
    onPressNewPlaylist,
}) => {
    const styles = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const playList = useSelector((state: ReducerState) => state.playerReducer.playList);
    const selectedTrack: any = useSelector((state: ReducerState) => state.playerReducer.playerList);

    const addSongToPlaylist = (item: PlaylistProps) => {
        Toast.show(`Added in ${item.name} Playlist`);
        const found = item?.songs?.find(
            (el: PlaylistProps | undefined | any) => el.id === selectedTrack.id,
        );
        const data = item;
        if (!found) data?.songs?.push(selectedTrack);
        const list: Array<PlaylistProps> = playList.map((item: PlaylistProps) => {
            if (item.name === data.name) {
                return data;
            } else {
                return item;
            }
        });

        dispatch(updatePlayList(list));
    };

    const removePlaylist = (name: PlaylistProps) => {
        const data: Array<PlaylistProps> = playList?.filter(
            (element: PlaylistProps) => element.name !== name,
        );
        dispatch(deletePlayListFolder(data));
    };

    const PlayListRenderItem = ({ item }: { item: PlaylistProps }) => (
        <>
            <TouchableOpacity onPress={() => addSongToPlaylist(item)}>
                <PlaylistSongsCard
                    name={item?.name}
                    model={item?.songs?.length}
                    img={
                        item?.songs?.length > 0
                            ? item?.songs[0]?.artwork
                            : `https://picsum.photos/150/200/?random=${Math.random()}`
                    }
                    onPressRemove={removePlaylist}
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
                        <AppHeader renderLeft={<View style={{ flex: 1, flexDirection: 'row', padding: 7 }}><Text style={styles.label}>Add To Playlist</Text>
                            <View style={{ flexDirection: 'row', width: '75%', }} />

                            <Button title="Cancel" onPress={() => onPressPlaylist()} />

                        </View>} />
                        <TouchableOpacity
                            style={styles.newListLabel}
                            onPress={() => onPressNewPlaylist()}>
                            <Text style={styles.name}>Create new playlist</Text>
                            <View style={{ width: '42%', justifyContent: 'flex-end' }} />
                            <TouchableOpacity onPress={() => onPressNewPlaylist()}>
                                <MaterialCommunityIcons
                                    name="playlist-plus"
                                    style={[styles.secondaryControl, styles.off]}
                                    size={30}
                                    color={theme.colors.primary}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
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
                </Modal>
            </View>
        </>
    );
};

export default AppPlaylistModal;
