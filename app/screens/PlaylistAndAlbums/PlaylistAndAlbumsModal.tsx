import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from "react-native-modal";
import AppHeader from '../AppHeader';
import PlaylistSongsCard from '../Playlist/PlaylistSongs/PlaylistSongsCard';
import { PlayerState } from '../../models/reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlayListFolder } from '../../store/actions/playerActions';
import PlaylistsAlbumsCard from '../../components/Playlist/PlaylistSongs/PlaylistsAlbumsCard';
interface MusicProps {
  addPlaylist?: any;
  playlistRef?: any;
  item?: any;
}
interface IPState {
  playerReducer: PlayerState;

}
const PlaylistAndAlbumsModal: React.FC<MusicProps> = ({
  addPlaylist,
  playlistRef,
  item,
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const playList = useSelector((state: IPState) => state.playerReducer.playList);
  const selectedTrack: any = useSelector((state: IPState) => state.playerReducer.playerList);



 
  const removePlaylist = (name: any) => {
    let data = playList?.filter((element: any) => element.name != item.name)
    dispatch(deletePlayListFolder(data));
  };


  return (

    <View style={styles.modalcontainer}>



      <View style={styles.bottomTaskCard} >
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={{ uri: item?.songs[0]?.artwork }}></Image>
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
        <TouchableOpacity onPress={() => {
          playlistRef.current.snapToIndex(1)
          removePlaylist(item.name)
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
