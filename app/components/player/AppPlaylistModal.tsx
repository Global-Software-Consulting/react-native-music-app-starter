import React from 'react';
import { View, TouchableOpacity, Button, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from "react-native-modal";
import AppHeader from '../AppHeader';
import PlaylistSongsCard from '../Playlist/PlaylistSongs/PlaylistSongsCard';
import { IPlayerState } from '../../models/reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayList, deletePlayListFolder } from '../../store/actions/playerActions';

interface MusicProps {

  isModalVisible?: any;
  onPressPlaylist?: any;
  onPressNewPlaylist?: any;


}
interface IPState {
  playerReducer: IPlayerState;

}
const AppPlaylistModal: React.FC<MusicProps> = ({
  isModalVisible,
  onPressPlaylist,
  onPressNewPlaylist
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const playList = useSelector((state: IPState) => state.playerReducer.playList);
  const selectedTrack: any = useSelector((state: IPState) => state.playerReducer.playerList);

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

  const removePlaylist = (name: any) => {
    
    let data = playList?.filter((element: any) => element.name != name)
    dispatch(deletePlayListFolder(data));
  };

  const PlayListRenderItem = ({ item }: any) => (
    <>
      <TouchableOpacity key={item} onPress={() => addSongToPlaylist(item)}>
        <PlaylistSongsCard
          name={item.name}
          model={item?.songs?.length}
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
        <Modal isVisible={isModalVisible}>
          <View style={styles.ModalContainer}>
            <AppHeader renderLeft={
              <Text style={styles.label}>Add To Playlist</Text>

            } />

            <TouchableOpacity style={styles.newListLabel} onPress={() => onPressNewPlaylist()}>
              <Text style={styles.name}>Create new playlist</Text>
              <View style={{ width: '30%' }} />
              <TouchableOpacity onPress={() => onPressNewPlaylist()}>
                <MaterialCommunityIcons
                  name="playlist-plus"
                  style={[styles.secondaryControl,  styles.off]}
                  size={30}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.folderContainer}>
              {playList?.length > 0 ? (

                <FlatList
                  contentContainerStyle={{ alignSelf: 'flex-start' }}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={playList}
                  // keyExtractor={item => item.id}
                  renderItem={PlayListRenderItem}

                />
              ) : (
                <View style={styles.container}>
                  <Text style={styles.model}>Playlist Empty</Text>
                </View>
              )}
            </View>
            {/* <FlatList></FlatList> */}

          </View>
          <Button
            // style={styles.CancelButton} 
            title="Cancel"
            onPress={() =>onPressPlaylist()} />
        </Modal>
      </View>
    </>
  );
};

export default AppPlaylistModal;
