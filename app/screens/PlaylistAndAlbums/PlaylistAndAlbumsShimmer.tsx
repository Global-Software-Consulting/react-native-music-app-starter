import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import PlaylistsAlbumsCard from '../../components/Playlist/PlaylistSongs/PlaylistsAlbumsCard';
import { useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import { useEffect } from 'react';
import { ReducerState } from '../../models/reducers';
import { MusicProps, PlaylistProps } from './types';

const PlaylistAndAlbumsShimmer: React.FC<MusicProps> = (): JSX.Element => {
    const styles = useStyles();
    const theme = useTheme();
    const playlistRef: any = React.useRef(null);
    const playList = useSelector((state: ReducerState) => state.playerReducer.playList);
    const [updatedPlaylist, setUpdatedPlaylist] = useState<Array<PlaylistProps>>([]);
    const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

    const closeAllModals = () => {
        setIsCreateModalVisible(!isCreateModalVisible);
    };

    const PlayListRenderItem = ({ item }: { item: PlaylistProps }) => (
        <>
            <TouchableOpacity>
                <PlaylistsAlbumsCard
                    name={item.name}
                    img={
                        item?.songs?.length > 0
                            ? item?.songs[0]?.artwork
                            : `https://picsum.photos/150/200/?random=${Math.random()}`
                    }
                    model={item.songs.length}
                    playlistRef={playlistRef}
                    item={item}
                />
            </TouchableOpacity>
        </>
    );

    useEffect(() => {
        if (playList?.length > 0) {
            setUpdatedPlaylist(playList);
        }
    });

    return (
        <>
            <View style={styles.container}>
                <View style={styles.folderContainer}>
                    <SearchBar
                        setUpdatedPlaylist={setUpdatedPlaylist}
                        placeholder={`Search ${playList.length} Playlist`}
                    />

                    <TouchableOpacity style={styles.newListLabel} onPress={() => closeAllModals()}>
                        <View style={{ width: '3%' }} />
                        <Ionicons
                            name="add-circle-outline"
                            size={30}
                            color={theme.colors.primary}
                        />
                        <Text style={styles.name}>Create new playlist</Text>
                    </TouchableOpacity>

                    <View style={{ paddingLeft: 10 }}>
                        {updatedPlaylist?.length > 0 ? (
                            <FlatList
                                contentContainerStyle={{ alignSelf: 'flex-start' }}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={updatedPlaylist}
                                renderItem={PlayListRenderItem}
                            />
                        ) : (
                            <View style={styles.errorContainer}>
                                <Ionicons
                                    name="musical-notes"
                                    style={styles.noMusicIcon}
                                    size={80}
                                />
                                <Text style={styles.noPlaylistText}>
                                    No Playlist or Albums yet{' '}
                                </Text>
                                <Text style={styles.model}>
                                    Playlist or album you have created will show up here.{' '}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </>
    );
};

export default PlaylistAndAlbumsShimmer;
