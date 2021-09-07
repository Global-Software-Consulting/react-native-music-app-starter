import React, { useState, useEffect } from 'react';
import { View, FlatList, RefreshControl, ScrollView, TouchableHighlight } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../styles';
import MusicCard from '../../../components/Music/MusicCard';
import Header from '../../../components/Header';
import { favoriteListRequest } from '../../../store/actions/appActions';
interface Itrack {

  id: string
  url: string
  title: string
  artist: string
  artwork: string
  album: string
  duration: number
}
const Favorite: React.FC<any> = (props): JSX.Element => {
  const favoriteList = useSelector(state => state.appReducer.favoriteList);
  const styles = useStyles();
  const dispatch = useDispatch();
  const removeFavorites = (id: any) => {
    let data = favoriteList?.filter((element: any) => element.id != id)
        dispatch(favoriteListRequest(data));  
    }
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
        renderItem={({ item }) => (
          <TouchableHighlight
            key={item}
            underlayColor='gray'
           onPress={() => {removeFavorites(item.id)}}
          >
            <View style={styles.Musiccontainer}>
              <MusicCard
                name={item.title}
                model={item.album}
                img={item.artwork}
              />

            </View>
          </TouchableHighlight>
        )}
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
