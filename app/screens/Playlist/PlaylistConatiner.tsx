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
import PlaylistSongsCard from '../../components/Playlist/PlaylistSongs/PlaylistSongsCard';
import { IPlayerState } from '../../models/reducers/player';
import PlaylistsAlbumsCard from '../../components/Playlist/PlaylistSongs/PlaylistsAlbumsCard';
import BottomSheet from '@gorhom/bottom-sheet';
import PlaylistModal from './PlaylistModal';
import PlaylistsTracksCard from '../../components/Playlist/PlaylistSongs/PlaylistsTracksCard';
import { favoriteListRequest } from '../../store/actions/appActions';

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
  const playlistSongsRef = React.useRef(null);
  const playList = useSelector((state: any) => state.playerReducer.playList);
  const [selectPlaylist, setSelectPlaylist] = useState(null);

  const route: any = useRoute();
  const item = route.params.item;
  
//   const deleteSongOfPlaylist = (id: any) => {
// console.log("hello ia m remove",id);

//     let data = item?.songs?.filter((element: any) => element.id != id);
//     let updatedList = { name: item.name, songs: data }
//     console.log("updatedList:",updatedList);
//     let updatedPlayList = playList.map((element: any) => {
//       if (element.name == item.name) {
//         return updatedList;
//       } else {
//         return element;
//       }
//     });
//     console.log("updatedPlayList:",updatedPlayList);

//     // dispatch(deletePlayListSong(updatedPlayList));
//   };


  const setThePlaylist = (item: any) => {
    setSelectPlaylist(item)
  }
  const PlaylistRenderItem = ({ item }: any) => (
    <TouchableHighlight
      key={item}
      underlayColor='gray'
    >

      <View style={styles.Musiccontainer}>
        <PlaylistsTracksCard
          name={item?.title}
          img={item?.artwork}
          model={item?.artist}
          playlistRef={playlistSongsRef}
          // onPressRemove={() => { deleteSongOfPlaylist(item?.id) }}
          showDel={true}
          item={item}
          setThePlaylist={setThePlaylist}
        />


      </View>

    </TouchableHighlight>
  );
  

  return (

    <View style={styles.container}>
      {/* <ScrollView></ScrollView> */}
      <ImageBackground source={{ uri: item.songs.length > 0 ? item.songs[0].artwork : `https://picsum.photos/150/200/?random=${Math.random()}` }}
        resizeMode="cover"
        style={styles.image}>

      </ImageBackground>

      <View style={styles.labelNameWrapper}>
        <Text style={styles.labelPlaylist}>{item.name}</Text>
        <Text style={styles.model}>Playlist: {item.length || item.name} Tracks: {item.songs.length}</Text>
      </View>

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
            <Text style={styles.noPlaylistText}>No Playlist Available </Text>
          </View>

        )}
      </View>
      <BottomSheet
        ref={playlistSongsRef}
        index={-1}
        snapPoints={[450, 2]}
        onAnimate={(fromIndex: number, toIndex: number) => {
        }}

        backgroundComponent={() =>
          <View style={styles.contentContainer} />
        }
        handleComponent={() =>
          <View style={styles.closeLineContainer}>
            <View style={styles.closeLine}></View>
          </View>
        }
      >
        <View style={styles.modal}>
          <PlaylistModal
            item={selectPlaylist}
            playlistRef={playlistSongsRef}

            // onPressRemove={deleteSongOfPlaylist(item?.id)}
          />


        </View>
      </BottomSheet>
    </View>

  );
};

export default Playlist;
