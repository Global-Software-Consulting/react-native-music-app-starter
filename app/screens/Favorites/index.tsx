import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { tracks } from '../../components/data/tracks';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'store/actions/loginActions';
import useStyles from './styles';
import MusicCard from '../../components/Music/MusicCard';
import Header from '../../components/Header';
import favoriteShimmer from './component/FavoriteShimmer';
import favorite from './component/Favorite';
import { useTranslation } from 'react-i18next';
import favoriteList from '../../services/favoriteList';
import { favoriteListRequest } from '../../store/actions/appActions';
import FavoriteShimmer from './component/FavoriteShimmer';
import Favorite from './component/Favorite';
interface Itrack {

  id: string
  url: string
  title: string
  artist: string
  artwork: string
  album: string
  duration: number
}
const Favorites: React.FC = () => {


  const favoriteList = useSelector(state => state.appReducer.favoriteList);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  // const Track: Itrack[] = tracks;
  const styles = useStyles();
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  useEffect(() => {
    onRefresh();
  }, []);
  const getFavoriteList = async () => {
    dispatch(favoriteListRequest());
  };
  const onRefresh = () => {
    getFavoriteList();
    if (refreshing) {
      <FavoriteShimmer />;
    } else {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {refreshing ? (
            <FavoriteShimmer />
          ) : (
            <Favorite listData={favoriteList} />
          )}
        </ScrollView>
      </View>
    </>

  );
};

export default Favorites;
