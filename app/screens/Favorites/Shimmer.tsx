import React, { useState } from 'react';
import { View, FlatList, RefreshControl, ScrollView } from 'react-native';
import useStyles from './styles';
import MusicCardShimmer from '../../components/Music/MusicCardShimmer';
import Header from '../../components/Header';
import { FavoriteProps } from './types';
import { ReducerState } from '../../models/reducers';
import { useSelector } from 'react-redux';

const FavoriteShimmer: React.FC<FavoriteProps> = () => {
    const favoriteList = useSelector((state: ReducerState) => state.appReducer.favoriteList);
    const styles = useStyles();
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const wait = (timeout: number) => {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    };
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const shimmerRenderItem = ({ item }: { item: FavoriteProps }) => (
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
                        data={favoriteList}
                        renderItem={shimmerRenderItem}
                    />
                </ScrollView>
            </View>
        </>
    );
};

export default FavoriteShimmer;
