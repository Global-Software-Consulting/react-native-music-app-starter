import React from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import MusicCardShimmer from '../../components/Music/MusicCardShimmer';
import PlaylistCardShimmer from '../../components/Playlist/PlaylistCardShimmer';
import { ReducerState } from '../../models/reducers';
import { Music } from './types';

const Home: React.FC<Music> = (): JSX.Element => {
    const musicList = useSelector((state: ReducerState) => state.appReducer?.musicList);
    const isLoading = useSelector((state: ReducerState) => state.loadingReducer.isLoginLoading);
    const styles = useStyles();
    const { t } = useTranslation();

    const PlayListRenderItem = ({ item }: { item: Music }) => (
        <MusicCardShimmer name={item.title} model={item.album} img={item.artwork} />
    );
    const RecommendedRenderItem = ({ item }: { item: Music }) => (
        <PlaylistCardShimmer name={item.title} img={item.artwork} />
    );

    return (
        <>
            <View style={styles.container}>
                <ScrollView refreshControl={<RefreshControl refreshing={isLoading} />}>
                    <Header title={t('Recommended for you')} />
                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={musicList}
                        scrollEventThrottle={2}
                        renderItem={RecommendedRenderItem}
                    />
                    <Header title={t('My Playlist')} />

                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={musicList}
                        // renderItem={renderItemsss}
                        renderItem={PlayListRenderItem}
                    />
                </ScrollView>
            </View>
        </>
    );
};

export default Home;
