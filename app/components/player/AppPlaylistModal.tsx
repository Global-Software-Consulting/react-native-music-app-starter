import React from 'react';
import { View, TouchableOpacity, Button, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from "react-native-modal";
import AppHeader from '../AppHeader';
interface MusicProps {

  isModalVisible?: any;
  onPressPlaylist?: any;
  addPlaylist?: any;
  onPressNewPlaylist?: any;


}
const AppPlaylistModal: React.FC<MusicProps> = ({
  isModalVisible,
  onPressPlaylist,
  addPlaylist,
  onPressNewPlaylist
}) => {
  const styles = useStyles();
  const theme = useTheme();


  return (
    <>
      <View style={styles.container}>
        <Modal isVisible={isModalVisible}>
          <View style={styles.ModalContainer}>
            <AppHeader renderLeft={
              <Text style={styles.label}>Add To Playlist</Text>

            } />

            <TouchableOpacity style={styles.newListLabel} onPress={onPressNewPlaylist}>
              <Text style={styles.name}>Create new playlist</Text>
              <View style={{ width: '25%' }} />
              <TouchableOpacity onPress={onPressNewPlaylist}>
                <MaterialCommunityIcons
                  name="playlist-plus"
                  style={[styles.secondaryControl, addPlaylist ? styles.on : styles.off]}
                  size={30}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            </TouchableOpacity>

            {/* <FlatList></FlatList> */}
       
          </View>
               <Button 
            // style={styles.CancelButton} 
            title="Cancel" 
            onPress={onPressPlaylist} />
        </Modal>
      </View>
    </>
  );
};

export default AppPlaylistModal;
