import React, { useEffect } from 'react';
import { View, FlatList, TouchableHighlight, RefreshControl } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import MusicCard from '../../components/Music/MusicCard';
import Header from '../../components/Header';
import { favoriteListRequest } from '../../store/actions/appActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isPlayerShow, playerListRequest } from '../../store/actions/playerActions';
import FavoriteShimmer from './Shimmer';
import { useTranslation } from 'react-i18next';
import { ReducerState } from '../../models/reducers';
import { FavoriteProps } from './types';
import { Favorites } from 'app/components/player/types';

const Favorite: React.FC<FavoriteProps> = (): JSX.Element => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const isLoader = useSelector((state: ReducerState) => state.loadingReducer?.isLoginLoading);
    const favoriteList: Array<Favorites> | undefined | any = useSelector(
        (state: ReducerState) => state.appReducer.favoriteList,
    );
    const removeFavorites = (id: string | undefined) => {
        const data = favoriteList?.filter((element: FavoriteProps) => element.id !== id);
        dispatch(favoriteListRequest(data));
    };
    const favoriteRenderItem = ({ item }: { item: FavoriteProps }) => (
        <TouchableHighlight
            underlayColor="gray"
            onPress={() => {
                removeFavorites(item.id);
            }}>
            <View style={styles.Musiccontainer}>
                <MusicCard
                    name={item.title}
                    model={item.artist}
                    img={item.artwork}
                    onPress={() => {
                        dispatch(isPlayerShow(true));
                        dispatch(playerListRequest(item));
                    }}
                />
                <Ionicons
                    name="heart"
                    style={styles.favIcon}
                    size={30}
                    onPress={() => {
                        removeFavorites(item.id);
                    }}
                />
            </View>
        </TouchableHighlight>
    );
    useEffect(() => {
        onRefresh();
    });
    const onRefresh = () => {
        if (isLoader) {
            <FavoriteShimmer />;
        } else {
            <Favorite />;
        }
    };
    return (
        <View style={styles.container}>
            <Header title={t('Liked Songs')} />
            {favoriteList?.length > 0 ? (
                <FlatList
                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    data={favoriteList}
                    renderItem={favoriteRenderItem}
                    refreshControl={<RefreshControl refreshing={isLoader} onRefresh={onRefresh} />}
                />
            ) : (
                <View style={styles.container}>
                    <Text style={styles.model}>{t('No Favorities Available')}</Text>
                </View>
            )}
        </View>
    );
};

export default Favorite;
