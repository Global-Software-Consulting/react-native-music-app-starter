import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableHighlight, RefreshControl, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AppState } from '../../models/reducers/app';
import { Loading } from '../../models/reducers/loading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PlayerState } from '../../models/reducers/player';
import BottomSheet from '@gorhom/bottom-sheet';
import PlaylistModal from './PlaylistModal';
import PlaylistsTracksCard from '../../components/Playlist/Tracks/PlaylistsTracksCard';
import { ScrollView } from 'react-native-gesture-handler';
import { updatePlayList } from '../../store/actions/playerActions';
import PlaylistShimmer from './PlaylistShimmer';
import {
  isPlayerShow,
  playerListRequest,
} from '../../store/actions/playerActions';
import {IState,IPState,Itrack, IPlaylist} from './types'

const Playlist: React.FC<IState> = (props): JSX.Element => {
  const styles = useStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const playlistSongsRef = React.useRef(null);
  const playList = useSelector((state: IPState) => state.playerReducer.playList);
  const [selectedSong, setSelectedSong] = useState(null);
  const isLoading = useSelector((state: IState) => state.loadingReducer.isLoginLoading);
  const route: IPlaylist = useRoute();
  const item= route.params.item;
  const setSong = (song: null) => {
    setSelectedSong(song);
  }
  const PlaylistRenderItem = ( { item }:{item: Itrack}) => (
    <TouchableHighlight
      underlayColor='gray'
    >

      <View style={styles.Musiccontainer}>
        <PlaylistsTracksCard
          name={item?.title}
          img={item?.artwork}
          model={item?.artist}
          playlistRef={playlistSongsRef}
          item={item}
          setSong={setSong}
          onPress={() => {
            dispatch(isPlayerShow(true));
            dispatch(playerListRequest(item));
          }}

        />


      </View>

    </TouchableHighlight>
  );
  // useEffect(() => {
  //   onRefresh();
  // }, []);


  // const onRefresh = () => {


  //   if (isLoading) {
  //     <PlaylistShimmer />;
  //   } else {

  //   }
  // };

  return (


    <View style={styles.container}>
      <ImageBackground source={{ uri: item.songs.length > 0 ? item.songs[0].artwork : `https://picsum.photos/150/200/?random=${Math.random()}` }}
        resizeMode="cover"
        style={styles.backgroundImage}>

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
            item={selectedSong}
            selectedPlaylist={item}
            playlistRef={playlistSongsRef}
          />


        </View>
      </BottomSheet>

    </View>

  );
};

export default Playlist;
