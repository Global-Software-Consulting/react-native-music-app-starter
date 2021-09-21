import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import MusicCard from '../../components/Music/MusicCard';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { favoriteListRequest } from '../../store/actions/appActions';
import { IAppState } from '../../models/reducers/app';
import { ILoading } from '../../models/reducers/loading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import PlaylistSongsCard from '../../components/Playlist/PlaylistSongs/PlaylistSongsCard';

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
const Playlist: React.FC<any> = (props): JSX.Element => {
  const styles = useStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const songList = useSelector((state: IState) => state.appReducer.musicList);
  const removePlaylist = (id: any) => {
    console.log("hello");
    
    let data = songList?.filter((element: any) => element.id != id)
    dispatch(favoriteListRequest(data));
  };
  const PlaylistRenderItem = ({ item }: any) => (
    <TouchableHighlight
      key={item}
      underlayColor='gray'
 >



      <View style={styles.Musiccontainer}>
        <PlaylistSongsCard
          name={item.title}
          img={item.artwork}
          model={item.artist}
          // onPress={() => { removePlaylist(item.id) }}
        />
      

      </View>

    </TouchableHighlight>
  );
  console.log("favlisttt:", songList);

  return (

    <View style={styles.container}>
      {/* <ScrollView></ScrollView> */}
      <ImageBackground source={{ uri: 'https://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg' }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.labelNameWrapper}>

          <Text style={styles.labelPlaylist}>Noor</Text>

        </View>
      </ImageBackground>
      <View style={styles.playlistContainer}>
        {songList?.length > 0 ? (

          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={songList}
            keyExtractor={(item) => item.id}
            renderItem={PlaylistRenderItem}

          />
        ) : (
          <View style={styles.noPlaylistContainer}>
            <Ionicons
              name="musical-notes"
              style={styles.noMusicIcon}
              size={80}

            />
            <Text style={styles.noPlaylistText}>No Playlist or Albums yet </Text>
            <Text style={styles.model}>Playlist or album you have liked or created will show up here. </Text>
          </View>

        )}
      </View>
    </View>

  );
};

export default Playlist;
