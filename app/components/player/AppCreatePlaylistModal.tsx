import React from 'react';
import { View, TouchableOpacity, Button, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from "react-native-modal";
import AppHeader from '../AppHeader';
import { deletePlayListFolder, playListRequest, updatePlayList } from '../../store/actions/playerActions';
import { IPlayerState } from '../../models/reducers/player';
import { favoriteListRequest } from 'app/store/actions/appActions';

interface MusicProps {
  onPressPlaylist?: any;
  onPressNewPlaylist?: any;
  isCreateModalVisible?: any;
  saveNewPlaylist?: any;
  addPlaylist?:any;

}
interface IState {
  playerReducer: IPlayerState;

}
const AppCreatePlaylistModal: React.FC<MusicProps> = ({
  onPressNewPlaylist,
  isCreateModalVisible,
  addPlaylist,
  onPressPlaylist
  // saveNewPlaylist
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [name, onChangeName] = React.useState('');
  const item = useSelector((state: IState) => state.playerReducer.playerList);
  const Playlist = useSelector((state: IState) => state.playerReducer.playList);
  const dispatch = useDispatch();

  const saveNewPlaylist = () => {

    let data = Playlist;
    let found = Playlist?.find(
      (element: any) => element.name == name,
    );
    if (!found) {
      data.push({ name: name, songs: [item] });
      dispatch(deletePlayListFolder(data));
      onPressNewPlaylist();
    }
    else {
      console.log("name already exists.....");
    }

   

  }
  return (
    <>
      <View style={styles.container}>
        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={isCreateModalVisible}>
          <View style={styles.CreateModalContainer}>
            <AppHeader
              renderLeft={
                <View style={{ flexDirection: 'row', padding: 8 }}>
                  <TouchableOpacity onPress={onPressNewPlaylist}>
                    <MaterialCommunityIcons
                      name="close"
                      // style={[styles.secondaryControl, addPlaylist ? styles.on : styles.off]}
                      size={30}
                      color={theme.colors.primary}
                    />
                  </TouchableOpacity>

                  <Text style={styles.label}>Create Playlist</Text>
                  <View style={{ width: '10%' }} />
                  <TouchableOpacity onPress={onPressNewPlaylist} style={styles.saveButton}>

                    <Text style={styles.saveButtonText}>Save</Text>
                  </TouchableOpacity>

                </View>
              } />
            <View style={styles.inputWrapper}>
              <Text>Playlist:</Text>
              <TextInput
                placeholder="Type here.."
                style={styles.input}
                value={name}
                onChangeText={(name) => onChangeName(name)}
                maxLength={10}
                keyboardType="default"
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default AppCreatePlaylistModal;
