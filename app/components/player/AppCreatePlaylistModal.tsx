import React from 'react';
import { View, TouchableOpacity, Button, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DownArrowIcon from 'react-native-vector-icons/AntDesign';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from "react-native-modal";
import AppHeader from '../AppHeader';
interface MusicProps {
  onPressPlaylist?: any;
  onPressNewPlaylist?: any;
  isCreateModalVisible?: any;


}
const AppCreatePlaylistModal: React.FC<MusicProps> = ({
  onPressNewPlaylist,
  isCreateModalVisible
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [text, onChangeText] = React.useState("Type Something here..");

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
                <View style={{ flexDirection: 'row', padding: 8}}>
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
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                maxLength={20}
                placeholder="useless placeholder"
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default AppCreatePlaylistModal;
