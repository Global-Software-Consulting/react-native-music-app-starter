import React, { useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,


} from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import i18n from '../../config/Languages/i18n';
import MusicCard from '../../components/Music/MusicCard';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteListRequest } from '../../store/actions/appActions';
import {useNavigation} from '@react-navigation/native';
import {IAppState} from '../../models/reducers/app';
const initI18n = i18n;

interface IState {
  appReducer: IAppState;
}
interface Itrack {

  id: string,
  url: string,
  title: string,
  artwork: string,
  artist: string,
  duration: number,
  
}
const HomeComponent: React.FC<any> = (props): JSX.Element => {
  const musicList = useSelector((state: IState) => state.appReducer.musicList);
  const favoriteList = useSelector((state: IState) => state.appReducer.favoriteList);
  // type homeScreenProp = StackNavigationProp<RootStackParamList, 'Player'>;
  const navigation = useNavigation<homeScreenProp>();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();

  const addToFavorites = (item: any) => {
    let data = favoriteList
    let found = favoriteList?.find((element: any) => element.id == item.id)
    if (!found) {
      data.push(item);
      dispatch(favoriteListRequest(data));
    }

  }
  return (
    <>
      <View style={styles.container}>

        <Header title="Recommended for you" />
        {props?.musicList?.length > 0 ? (
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={props.musicList}
            scrollEventThrottle={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

              <TouchableOpacity
                key={item}
                onPress={() => {
                  addToFavorites(item)
                }}
              >
                <MusicCard
                  name={item.title}
                  model={item.artist}
                  img={item.artwork}
                  onPress={() =>
                    navigation.navigate('Player', {
                      item: item,
                    })
                  }
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={styles.container}>
            <Text style={styles.model}>No Reommendations Available</Text>
          </View>

        )}
        <Header title="My Playlist" />

        {props?.musicList?.length > 0 ? (
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={props.musicList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item}
                onPress={() => { addToFavorites(item) }}
              >
                <MusicCard
                  name={item.title}
                  model={item.artist}
                  img={item.artwork}
                  onPress={() =>
                    navigation.navigate('Player', {
                      item: item,
                    })
                  }
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={styles.container}>
            <Text style={styles.model}>Playlist Empty</Text>
          </View>

        )}

      </View>
    </>
  );
};

export default HomeComponent;
