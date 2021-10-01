import React from 'react';
import { View, FlatList, TouchableHighlight, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlaylistsTracksCarShimmer from '../../components/Playlist/Tracks/PlaylistsTracksCarShimmer';
import { PlaylistProps } from './types';
import { useTranslation } from 'react-i18next';

const PlaylistShimmer: React.FC<PlaylistProps> = () => {
    const styles = useStyles();
    const playlistSongsRef = React.useRef(null);
    const route: any = useRoute();
    const item = route.params.item;
    const { t } = useTranslation();

    const PlaylistRenderItem = ({ item }: { item: PlaylistProps }) => (
        <TouchableHighlight underlayColor="gray">
            <View style={styles.shimmerMusiccontainer}>
                <PlaylistsTracksCarShimmer
                    name={item?.title}
                    img={item?.artwork}
                    model={item?.artist}
                    playlistRef={playlistSongsRef}
                    item={item}
                />
            </View>
        </TouchableHighlight>
    );

    return (
        <View style={styles.shimmerContainer}>
            <ImageBackground source={{}} resizeMode="cover" style={styles.shimmerBackgroundImage} />
            <View style={styles.shimmerLabelNameWrapper}>
                <Text style={styles.shimmerLabelPlaylist} />
                <Text style={styles.shimmerModel} />
            </View>

            <View style={styles.shimmerPlaylistContainer}>
                {item.songs?.length > 0 ? (
                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={item.songs}
                        renderItem={PlaylistRenderItem}
                    />
                ) : (
                    <View style={styles.noPlaylistContainer}>
                        <Ionicons name="musical-notes" style={styles.noMusicIcon} size={80} />
                        <Text style={styles.noPlaylistText}>{t('No Playlist Available')} </Text>
                    </View>
                )}
            </View>
        </View>
    );
};

export default PlaylistShimmer;
