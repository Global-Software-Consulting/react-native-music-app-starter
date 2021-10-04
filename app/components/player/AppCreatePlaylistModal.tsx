import React from 'react';
import { View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from 'react-native-modal';
import AppHeader from '../AppHeader';
import { updatePlayList } from '../../store/actions/playerActions';
import Toast from 'react-native-simple-toast';
import { ReducerState } from '../../models/reducers';
import { MusicProps, PlaylistProps } from './types';

const AppCreatePlaylistModal: React.FC<MusicProps> = ({ isCreateModalVisible, closeModals }) => {
    const styles = useStyles();
    const theme = useTheme();
    const [name, onChangeName] = React.useState('');
    const song = useSelector((state: ReducerState) => state.playerReducer.playerList);
    const playlist = useSelector((state: ReducerState) => state.playerReducer.playList);
    const dispatch = useDispatch();

    const saveNewPlayList = () => {
        const data: Array<PlaylistProps> | undefined = playlist;
        const found = playlist?.find((element: PlaylistProps) => element.name === name);
        if (!found) {
            let obj;
            if (song) {
                obj = { name: name, songs: [song] };
            } else {
                obj = { name: name, songs: [] };
            }
            data.push(obj);
            dispatch(updatePlayList(data));
            closeModals();
        } else {
            Toast.show(`${found.name} Playlist Already exist`);
        }
    };
    return (


        <View style={styles.container}>
            <Modal isVisible={isCreateModalVisible}
          
             >
                {/* <View style={styles.CreateModalContainer}> */}
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.CreateModalContainer}
                    >
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
                                    <View style={{ width: '20%' }} />
                                    <TouchableOpacity
                                        onPress={saveNewPlayList}
                                        style={styles.saveButton}>
                                        <Text style={styles.saveButtonText}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        />


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
        </KeyboardAvoidingView>
                {/* </View> */}
            </Modal>
        </View>

    );
};

export default AppCreatePlaylistModal;
