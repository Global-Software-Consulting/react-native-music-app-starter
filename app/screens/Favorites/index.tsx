import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { tracks } from '../../data/tracks';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
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
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
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
            <Favorite/>
          )}
        </ScrollView>
      </View>
    </>

  );
};

export default Favorites;
