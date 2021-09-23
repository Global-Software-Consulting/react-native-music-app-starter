import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import MusicCard from '../../components/Music/MusicCard';
import Header from '../../components/Header';
import { useRoute, useNavigation } from '@react-navigation/native';
import { deletePlayListSong } from '../../store/actions/playerActions';
import { IAppState } from '../../models/reducers/app';
import { ILoading } from '../../models/reducers/loading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import PlaylistSongsCard from '../../components/Playlist/PlaylistSongs/PlaylistSongsCard';
import { IPlayerState } from '../../models/reducers/player';

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
interface IPState {
  playerReducer: IPlayerState;

}
const Playlist: React.FC<any> = (props): JSX.Element => {
  const styles = useStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const playList = useSelector((state: any) => state.playerReducer.playList);  
  const route: any = useRoute();
  const item = route.params.item;
  const deleteSongOfPlaylist = (id: any) => {
    
    let data = item?.songs?.filter((element: any) => element.id != id);    
    let updatedList = { name: item.name, songs: data}
    let updatedPlayList = playList.map((element: any) => {
      if (element.name == item.name) {
        return updatedList;
      } else {
        return element;
      }
    });
    dispatch(deletePlayListSong(updatedPlayList));
  };
  const PlaylistRenderItem = ({ item }: any) => (
    <TouchableHighlight
      key={item}
      underlayColor='gray'
 >

      <View style={styles.Musiccontainer}>
        <PlaylistSongsCard
          name={item?.title}
          img={item?.artwork}
          model={item?.artist}
          onPressRemove={() => { deleteSongOfPlaylist(item?.id) }}
          showDel={true}
        />
      

      </View>

    </TouchableHighlight>
  );

  return (

    <View style={styles.container}>
      {/* <ScrollView></ScrollView> */}
      <ImageBackground source={{ uri: item.songs[0].artwork }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.labelNameWrapper}>

          <Text style={styles.labelPlaylist}>{item.name}</Text>

        </View>
      </ImageBackground>
      <View style={styles.playlistContainer}>
        {item.songs?.length > 0 ? (

          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={item.songs}
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
