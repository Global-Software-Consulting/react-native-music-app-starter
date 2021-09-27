import React from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import useStyles from './styles';
// import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import { tracks } from '../../data/tracks';
import { useSelector } from 'react-redux';
import MusicCardShimmer from '../../components/Music/MusicCardShimmer';
import PlaylistCardShimmer from '../../components/Playlist/PlaylistCardShimmer';
import { Loading } from '../../models/reducers/loading';

interface IState {
    loadingReducer: Loading;
}

interface Itrack {
    id: string;
    url: string;
    title: string;
    artist: string;
    artwork: string;
    album: string;
    duration: number;
}

const Home: React.FC<any> = (): JSX.Element => {
    const isLoading = useSelector((state: IState) => state.loadingReducer.isLoginLoading);
    const Track: Itrack[] = tracks;
    const styles = useStyles();

    const PlayListRenderItem = ({ item }: any) => (
        <MusicCardShimmer name={item.title} model={item.album} img={item.artwork} />
    );
    const RecommendedRenderItem = ({ item }: any) => (
        <PlaylistCardShimmer name={item.title} img={item.artwork} />
    );

    return (
        <>
            <View style={styles.container}>
                <ScrollView refreshControl={<RefreshControl refreshing={isLoading} />}>
                    <Header title="Recommended for you" />
                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={Track}
                        scrollEventThrottle={2}
                        keyExtractor={(item) => item.id}
                        renderItem={RecommendedRenderItem}
                    />
                    <Header title="My Playlist" />

                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={Track}
                        keyExtractor={(item) => item.id}
                        // renderItem={renderItemsss}
                        renderItem={PlayListRenderItem}
                    />
                </ScrollView>
            </View>
        </>
    );
};

export default Home;
