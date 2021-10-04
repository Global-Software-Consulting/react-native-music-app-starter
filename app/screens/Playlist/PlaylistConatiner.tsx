import React, { useState } from 'react';
import { View, FlatList, TouchableHighlight, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';
import PlaylistModal from './PlaylistModal';
import PlaylistsTracksCard from '../../components/Playlist/Tracks/PlaylistsTracksCard';
import { isPlayerShow, playerListRequest } from '../../store/actions/playerActions';
import { PlaylistProps } from './types';
import { useEffect } from 'react';
import { ReducerState } from '../../models/reducers';
import { useTranslation } from 'react-i18next';

const Playlist: React.FC<PlaylistProps> = (): JSX.Element => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const playList = useSelector((state: ReducerState) => state.playerReducer.playList);
    const playlistSongsRef = React.useRef(null);
    const { t } = useTranslation();
    const [selectedSong, setSelectedSong] = useState(null);
    const route: any = useRoute();
    const selectedPlaylist: any = route.params.item;
    const [item, setPlaylist] = useState<null | undefined | PlaylistProps>(null);
    const setSong = (song: null) => {
        setSelectedSong(song);
    };

    useEffect(() => {
        if (selectedPlaylist) {
            const found: PlaylistProps | undefined = playList?.find(
                (selectedPlaylistElement: PlaylistProps) =>
                    selectedPlaylistElement.name === selectedPlaylist.name,
            );
            setPlaylist(found);
        }
    }, [selectedPlaylist]);

    useEffect(() => {
        if (playList) {
            const found: PlaylistProps | undefined = playList?.find(
                (playListElement: PlaylistProps) => playListElement.name === selectedPlaylist.name,
            );
            setPlaylist(found);
        }
    }, [playList]);

    const PlaylistRenderItem = ({ item }: { item: PlaylistProps }) => (
        <TouchableHighlight underlayColor="gray">
            <View style={styles.Musiccontainer}>
                <PlaylistsTracksCard
                    name={item?.title}
                    img={item?.artwork}
                    model={item?.artist}
                    playlistRef={playlistSongsRef}
                    item={item}
                    setSong={setSong}
                    onPress={() => {
                        dispatch(isPlayerShow(true));
                        dispatch(playerListRequest(item));
                    }}
                />
            </View>
        </TouchableHighlight>
    );


    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri:
                        selectedPlaylist?.songs?.length > 0
                            ? selectedPlaylist?.songs[0]?.artwork
                            : `https://picsum.photos/150/200/?random=${Math.random()}`,
                }}
                resizeMode="cover"
                style={styles.backgroundImage}
            />

            <View style={styles.labelNameWrapper}>
                <Text style={styles.labelPlaylist}>{item?.name}</Text>
                <Text style={styles.model}>
                    {t('Playlist')}: {selectedPlaylist?.length || item?.name} {t('Tracks')}:{' '}
                    {selectedPlaylist?.songs.length}
                </Text>
            </View>

            <View style={styles.playlistContainer}>
                {selectedPlaylist?.songs?.length > 0 ? (
                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={item?.songs}
                        renderItem={PlaylistRenderItem}
                    />
                ) : (
                    <View style={styles.noPlaylistContainer}>
                        <Ionicons name="musical-notes" style={styles.noMusicIcon} size={80} />
                        <Text style={styles.noPlaylistText}>{t('No Playlist Available')} </Text>
                    </View>
                )}
            </View>
            <BottomSheet
                ref={playlistSongsRef}
                index={-1}
                snapPoints={[320, 2]}
                backgroundComponent={() => <View style={styles.contentContainer} />}
                handleComponent={() => (
                    <View style={styles.closeLineContainer}>
                        <View style={styles.closeLine} />
                    </View>
                )}>
                <View style={styles.modal}>
                    <PlaylistModal
                        item={selectedSong}
                        selectedPlaylist={item}
                        playlistRef={playlistSongsRef}
                    />
                </View>
            </BottomSheet>
        </View>
    );
};

export default Playlist;
