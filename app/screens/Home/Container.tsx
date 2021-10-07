import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import MusicCard from '../../components/Music/MusicCard';
import PlaylistCard from '../../components/Playlist/PlaylistCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import HomeShimmer from './Shimmer';
import { PlaylistProps, Music } from './types';
import { isPlayerShow, playerListRequest } from '../../store/actions/playerActions';
import { musicListRequest } from '../../store/actions/appActions';
import { ReducerState } from '../../models/reducers';
import { AppScreenNavigationProp } from '../../navigation/AppNavigation';



const HomeComponent: React.FC<Music> = (): JSX.Element => {
    const musicList: Array<Music> | undefined | any = useSelector(
        (state: ReducerState) => state.appReducer?.musicList,
    );
    const playList = useSelector((state: ReducerState) => state.playerReducer?.playList);
    const isLoader = useSelector((state: ReducerState) => state.loadingReducer?.isLoginLoading);
    const isVisible = useIsFocused();
    const navigation:any = useNavigation<AppScreenNavigationProp>();
    const dispatch = useDispatch();
    const [userPlaylist, setUserPlaylist] = useState<Array<PlaylistProps>>([]);
    const { t } = useTranslation();
    const styles = useStyles();

    useEffect(() => {
        if (isVisible) {
            setUserPlaylist(playList);
        } else {
            // console.log("Nothing");
        }
    }, [isVisible]);
    const getMusicList = async () => {
        dispatch(musicListRequest());
    };

    const onRefresh = () => {
        getMusicList();
        if (isLoader) {
            <HomeShimmer />;
        } else {
            <HomeComponent />;
        }
    };

    const RecommendedRenderItem = ({ item }: { item: Music }) => (
        <MusicCard
            name={item.title}
            model={item.artist}
            img={item.artwork}
            onPress={() => {
                dispatch(isPlayerShow(true));
                dispatch(playerListRequest(item));
            }}
        />
    );
    const PlayListRenderItem = ({ item }: { item: PlaylistProps }) => (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('Playlist', { item: item })}>
                <PlaylistCard
                    name={item.name}
                    img={
                        item?.songs?.length > 0
                            ? item?.songs[0]?.artwork
                            : `https://picsum.photos/150/200/?random=${Math.random()}`
                    }
                    onPress={() => {
                        // dispatch(playerListRequest(item));
                        navigation.navigate('Playlist', { item: item });
                    }}
                />
            </TouchableOpacity>
        </>
    );

    return (
        <>
            <View style={styles.container}>
                <ScrollView
                    nestedScrollEnabled={true}
                    refreshControl={<RefreshControl refreshing={isLoader} onRefresh={onRefresh} />}>
                    <Header title={t('Recommended for you')} />
                    {musicList?.length > 0 ? (
                        <FlatList
                            contentContainerStyle={{ alignSelf: 'flex-start' }}
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={musicList}
                            scrollEventThrottle={2}
                            renderItem={RecommendedRenderItem}
                        />
                    ) : (
                        <View style={styles.container}>
                            <Text style={styles.model}>{t('No Reommendations Available')}</Text>
                        </View>
                    )}
                    <Header title={t('My Playlist')} />

                    {userPlaylist?.length > 0 ? (
                        <FlatList
                            contentContainerStyle={{ alignSelf: 'flex-start' }}
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={userPlaylist}
                            renderItem={PlayListRenderItem}
                        />
                    ) : (
                        <View style={styles.container}>
                            <Text style={styles.model}>{t('Playlist Empty')}</Text>
                        </View>
                    )}
                </ScrollView>
            </View>
        </>
    );
};

export default HomeComponent;
