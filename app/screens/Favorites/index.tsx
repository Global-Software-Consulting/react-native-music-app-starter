import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, RefreshControl } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
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
  const navigation = useNavigation();
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
     
    
     
      <View style={styles.container}>
      <AppHeader 
    renderLeft={ <LeftArrowIcon
      name="keyboard-arrow-left"
      style={styles.icon}
      size={30}
      onPress={() => navigation.navigate('My Music App')}
    />}
    />
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
    

  );
};

export default Favorites;
