import React, { useState } from 'react';
import { View, TouchableOpacity, Button, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from "react-native-modal";
import AppHeader from '../../components/AppHeader';
import PlaylistsAlbumsCard from '../../components/Playlist/PlaylistSongs/PlaylistsAlbumsCard';
import { PlayerState } from '../../models/reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayList, deletePlayListFolder } from '../../store/actions/playerActions';
import SearchBar from '../../components/SearchBar';
import PlaylistAndAlbumsModal from './PlaylistAndAlbumsModal';
import { useEffect } from 'react';
import AppCreatePlaylistModal from '../../components/player/AppCreatePlaylistModal'
import { useNavigation, useIsFocused } from '@react-navigation/native';

interface IPState {
  playerReducer: PlayerState;

}

const PlaylistAndAlbumsConatiner: React.FC<any> = (props): JSX.Element => {
  const selectedTrack: any = useSelector((state: IPState) => state.playerReducer.playerList);
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const playlistRef = React.useRef(null);
  const playList = useSelector((state: IPState) => state.playerReducer.playList);
  const [addPlaylist, setAddPlaylist] = useState<boolean>(false);
  const [updatedPlaylist, setUpdatedPlaylist] = useState<any>([]);
  const [selectPlaylist, setSelectPlaylist] = useState(null);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const navigation = useNavigation();

  const addSongToPlaylist = (item: any) => {
    let found = item.songs.find((el: any) => el.id == selectedTrack.id);
    let data = item;
    if (!found) data.songs.push(selectedTrack);

    let list = playList.map((item: any) => {
      if (item.name == data.name) {
        return data;
      } else {
        return item;
      }
    });

    dispatch(updatePlayList(list));
  };


  const closeAllModals = () => {
    setIsCreateModalVisible(!isCreateModalVisible);
  }

  const setThePlaylist = (item: any) => {
    setSelectPlaylist(item)
  }
  const PlayListRenderItem = ({ item }: any) => (

    <>
      <TouchableOpacity key={item} onPress={() => addSongToPlaylist(item)}>
        <PlaylistsAlbumsCard
          name={item.name}
          img={item.songs.length > 0 ? item.songs[0].artwork : `https://picsum.photos/150/200/?random=${Math.random()}`}
          model={item.songs.length}
          playlistRef={playlistRef}
          item={item}
          setThePlaylist={setThePlaylist}
        onPress={() => {
          // dispatch(playerListRequest(item));
          navigation.navigate('Playlist',{ item: item })
        }}
        />
      </TouchableOpacity>
    </>
  );

  useEffect(() => {
    if (playList?.length > 0) {
      setUpdatedPlaylist(playList);
    }
  }, [playList.length]);



  return (

    <>
      <View style={styles.container}>

        <View style={styles.folderContainer}>
          <SearchBar setUpdatedPlaylist={setUpdatedPlaylist}
            placeholder={`Search ${playList.length} Playlist`}
          />

          <TouchableOpacity style={styles.newListLabel} onPress={() => closeAllModals()}>
            <View style={{ width: '3%' }} />
            <Ionicons
              name="add-circle-outline"
              style={[styles.secondaryControl, addPlaylist ? styles.on : styles.off]}
              size={30}
              color={theme.colors.primary}
            />
            <Text style={styles.name}>Create new playlist</Text>
          </TouchableOpacity>

          <View style={{ paddingLeft: 10 }}>
            {updatedPlaylist?.length > 0 ? (

              <FlatList
                contentContainerStyle={{ alignSelf: 'flex-start' }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={updatedPlaylist}
                renderItem={PlayListRenderItem}

              />
            ) : (
              <View style={styles.errorContainer}>
                <Ionicons
                  name="musical-notes"
                  style={styles.noMusicIcon}
                  size={80}

                />
                <Text style={styles.noPlaylistText}>No Playlist or Albums yet </Text>
                <Text style={styles.model}>Playlist or album you have created will show up here. </Text>
              </View>


            )}
          </View>


        </View>

      </View>
      <BottomSheet
        ref={playlistRef}
        index={-1}
        snapPoints={[400, 2]}
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
          <PlaylistAndAlbumsModal
            item={selectPlaylist}
            playlistRef={playlistRef}
          />
        </View>
      </BottomSheet>
      <AppCreatePlaylistModal
        closeModals={closeAllModals}
        isCreateModalVisible={isCreateModalVisible}

      />

    </>

  );
};

export default PlaylistAndAlbumsConatiner;
