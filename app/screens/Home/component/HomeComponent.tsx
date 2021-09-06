import React, { useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,


} from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from '../styles';
import { useTranslation } from 'react-i18next';
import Header from '../../../components/Header';
import i18n from '../../../utils/Languages/i18n';
import MusicCard from '../../../components/Music/MusicCard';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteListRequest, favoriteListResponse } from '../../../store/actions/appActions';

const initI18n = i18n;

const HomeComponent: React.FC<any> = (props): JSX.Element => {
  const musicList = useSelector(state => state.appReducer.musicList);
  const favoriteList = useSelector(state => state.appReducer.favoriteList);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();

  const addToFavorites = (item: any) => {
    let data = favoriteList
    let isAdded = favoriteList?.findIndex((data) => {
      return data?.id == item?.id
    })

    if (isAdded != -1) {
      console.log('Deletion');
      let ddd=data?.slice(0, 1)
      console.log('data', data);
      dispatch(favoriteListRequest(ddd));
    }
    else{
      console.log('Creation');
      data.push(item);
      dispatch(favoriteListRequest(data));
  
      console.log('Creation data:', data);
    }


  };

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
                  model={item.album}
                  img={item.artwork}
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
                  model={item.album}
                  img={item.artwork}
                // onPress={() => {fav?addToFavorites():removeFavorites(item.id)}}
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
