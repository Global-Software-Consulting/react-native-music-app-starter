import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import { PlayerState } from '../../models/reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlayListFolder } from '../../store/actions/playerActions';
interface MusicProps {
    addPlaylist?: any;
    playlistRef?: any;
    item?: any;
}
interface IPState {
    playerReducer: PlayerState;
}
const PlaylistAndAlbumsModal: React.FC<MusicProps> = ({ addPlaylist, playlistRef, item }) => {
    const styles = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const playList = useSelector((state: IPState) => state.playerReducer.playList);
    const removePlaylist = () => {
        const data = playList?.filter((element: any) => element.name !== item.name);
        dispatch(deletePlayListFolder(data));
    };

    return (
        <View style={styles.modalcontainer}>
            <View style={styles.bottomTaskCard}>
                <View style={styles.imgcontainer}>
                    <Image style={styles.img} source={{ uri: item?.songs[0]?.artwork }} />
                </View>

                <View style={styles.nameContainer}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.bottomlabel}>{item?.name}</Text>
                        <Text style={styles.model}>{item?.songs?.length} tracks </Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '15%' }} />
            {/* {showDel && <TouchableOpacity onPress={()=> onPressRemove(name) }> */}

            <View style={styles.bottomModalContainer}>
                {/* <TouchableOpacity style={styles.newListLabel} > */}
                <View style={{ width: '5%' }} />
                <TouchableOpacity
                    onPress={() => {
                        playlistRef.current.snapToIndex(1);
                        removePlaylist(item.name);
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons
                            name="delete"
                            style={[styles.secondaryControl, addPlaylist ? styles.on : styles.off]}
                            size={30}
                            color={theme.colors.primary}
                        />
                        <Text style={styles.iconName}>Remove playlist</Text>
                    </View>
                </TouchableOpacity>
                {/* </TouchableOpacity> */}
            </View>
        </View>
    );
};

export default PlaylistAndAlbumsModal;
