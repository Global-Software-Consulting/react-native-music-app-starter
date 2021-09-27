import React, { useState } from 'react';
import { View, FlatList, RefreshControl, ScrollView } from 'react-native';
import { tracks } from '../../data/tracks';
import useStyles from './styles';
import MusicCardShimmer from '../../components/Music/MusicCardShimmer';
import Header from '../../components/Header';
interface Itrack {
    id: string;
    url: string;
    title: string;
    artist: string;
    artwork: string;
    album: string;
    duration: number;
}
const FavoriteShimmer: React.FC<any> = () => {
    const Track: Itrack[] = tracks;
    const styles = useStyles();
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const wait = (timeout: number) => {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    };
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const shimmerRenderItem = ({ item }: any) => (
        <View style={styles.Musiccontainer}>
            <MusicCardShimmer name={item.title} model={item.album} img={item.artwork} />
        </View>
    );
    return (
        <>
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                    <Header title="Liked Songs" />

                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        data={Track}
                        keyExtractor={(item) => item.id}
                        renderItem={shimmerRenderItem}
                    />
                </ScrollView>
            </View>
        </>
    );
};

export default FavoriteShimmer;
