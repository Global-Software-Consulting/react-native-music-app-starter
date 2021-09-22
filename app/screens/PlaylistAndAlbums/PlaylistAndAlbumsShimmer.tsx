import React from 'react';
import { View, TouchableOpacity, Button, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from "react-native-modal";
import AppHeader from '../../components/AppHeader';
import PlaylistSongsCard from '../../components/Playlist/PlaylistSongs/PlaylistSongsCard';
import { IPlayerState } from '../../models/reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayList, deletePlayListFolder } from '../../store/actions/playerActions';


// interface IState {
//   appReducer: IAppState;
//   loadingReducer: ILoading;
// }

interface IPState {
  playerReducer: IPlayerState;

}

const PlaylistAndAlbumsShimmer: React.FC<any> = (props, navigation) => {
  const selectedTrack: any = useSelector((state: IPState) => state.playerReducer.playerList);
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const playList = useSelector((state: IPState) => state.playerReducer.playList);
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
    // console.log(tatti,'tatti');

    dispatch(updatePlayList(list));
  };

  const removePlaylist = (name: any) => {
    let data = playList?.filter((element: any) => element.name != name)
    dispatch(deletePlayListFolder(data));
  };

  const PlayListRenderItem = ({ item }: any) => (
    <>
      <TouchableOpacity key={item} onPress={() => addSongToPlaylist(item)}>
        <PlaylistSongsCard
          name={item.name}
          img={item?.songs[0]?.artwork}
          onPressRemove={removePlaylist}
          showDel={true}
        />
      </TouchableOpacity>
    </>
  );

  return (

  <>
 <View style={styles.container}>
 
    <View style={styles.ModalContainer}>
      <AppHeader renderLeft={
        <Text style={styles.label}>Add To Playlist</Text>

      } />

      <View style={styles.folderContainer}>
        <TouchableOpacity style={styles.newListLabel} onPress={onPressNewPlaylist}>
          <Text style={styles.name}>Create new playlist</Text>
          <View style={{ width: '30%' }} />
          <TouchableOpacity onPress={onPressNewPlaylist}>
            <MaterialCommunityIcons
              name="playlist-plus"
              // style={[styles.secondaryControl, addPlaylist ? styles.on : styles.off]}
              size={30}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {playList?.length > 0 ? (

          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={playList}
            renderItem={PlayListRenderItem}

          />
        ) : (
          <View style={styles.container}>
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
    <Button
      title="Cancel"
      onPress={onPressPlaylist} />
 
</View>
</>

  );
};
export default PlaylistAndAlbumsShimmer;
