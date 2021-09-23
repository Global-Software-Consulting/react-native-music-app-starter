import React from 'react';
import { View, TouchableOpacity, Button, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from "react-native-modal";
import AppHeader from '../AppHeader';
import { updatePlayList } from '../../store/actions/playerActions';
import { IPlayerState } from '../../models/reducers/player';

interface MusicProps {
  isCreateModalVisible?: boolean;
  closeModals?: any;

}
interface IState {
  playerReducer: IPlayerState;

}
const AppCreatePlaylistModal: React.FC<MusicProps> = ({
  isCreateModalVisible,
  closeModals
}) => {
  
  const styles = useStyles();
  const theme = useTheme();
  const [name, onChangeName] = React.useState('');
  const item = useSelector((state: IState) => state.playerReducer.playerList);
  const playlist = useSelector((state: IState) => state.playerReducer.playList);
  const dispatch = useDispatch();

  const saveNewPlayList = () => {

    let data = playlist;
    let found = playlist?.find((element: any) => element.name == name);
    if (!found) {
      let obj = { name: name, songs: [item] };
      data.push(obj);
      dispatch(updatePlayList(data));
      closeModals();
    } else {
      console.log("name already exists.....");
    }

  }
  return (
    
      <View style={styles.container}>
        <Modal isVisible={isCreateModalVisible}>
          <View style={styles.CreateModalContainer}>
            <AppHeader
              renderLeft={
                <View style={{ flexDirection: 'row', padding: 8 }}>
                  <TouchableOpacity onPress={() => closeModals()}>
                    <MaterialCommunityIcons
                      name="close"
                      size={30}
                      color={theme.colors.primary}
                    />
                  </TouchableOpacity>

                  <Text style={styles.label}>Create Playlist</Text>
                  <View style={{ width: '10%' }} />
                  <TouchableOpacity onPress={saveNewPlayList} style={styles.saveButton}>

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
    
  );
};

export default AppCreatePlaylistModal;
