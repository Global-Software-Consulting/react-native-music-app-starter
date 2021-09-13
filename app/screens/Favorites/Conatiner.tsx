import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import MusicCard from '../../components/Music/MusicCard';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { favoriteListRequest } from '../../store/actions/appActions';
import { IAppState } from '../../models/reducers/app';
import {ILoading} from '../../models/reducers/loading';

interface IState {
  appReducer: IAppState;
  loadingReducer: ILoading;
}
interface Itrack {

  id: string,
  url: string,
  title: string,
  artist: string,
  artwork: string,
  album: string,
  duration: number,
}
const Favorite: React.FC<any> = (props): JSX.Element => {
  const styles = useStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favoriteList = useSelector((state:IState) => state.appReducer.favoriteList);
  const removeFavorites = (id: any) => {
    let data = favoriteList?.filter((element: any) => element.id != id)
    dispatch(favoriteListRequest(data));
  };
  const favoriteRenderItem = ({ item }: any) => (
    <TouchableHighlight
      key={item}
      underlayColor='gray'
      onPress={() => { removeFavorites(item.id) }}
    >
      <View style={styles.Musiccontainer}>
        <MusicCard
          name={item.title}
          model={item.artist}
          img={item.artwork}
        />

      </View>
    </TouchableHighlight>
  );
  console.log("favlisttt:", favoriteList);

  return (

    <View style={styles.container}>

      <Header title="Liked Songs" />
      {favoriteList?.length > 0 ? (

        <FlatList
          contentContainerStyle={{ alignSelf: 'flex-start' }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={favoriteList}
          keyExtractor={(item) => item.id}
          renderItem={favoriteRenderItem}

        />
      ) : (
        <View style={styles.container}>
          <Text style={styles.model}>No Favorities Available</Text>
        </View>

      )}

    </View>

  );
};

export default Favorite;
