import React, { useState } from 'react';
import { View, TouchableOpacity, Button, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme, Text } from 'react-native-paper';
import useStyles from './styles';
import Modal from "react-native-modal";
import AppHeader from '../../components/AppHeader';
import PlaylistSongsCard from '../../components/Playlist/PlaylistSongs/PlaylistSongsCard';
import { IPlayerState } from '../../models/reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar';


// interface IState {
//   appReducer: IAppState;
//   loadingReducer: ILoading;
// }

interface IPState {
  playerReducer: IPlayerState;

}

const PlaylistAndAlbumsShimmer: React.FC<any> = (props): JSX.Element => {
  const selectedTrack: any = useSelector((state: IPState) => state.playerReducer.playerList);
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const playList = useSelector((state: IPState) => state.playerReducer.playList);
  const [addPlaylist, setAddPlaylist] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState(false);

  
  const removePlaylist = (name: any) => {
    let data = playList?.filter((element: any) => element.name != name)
  };

  const PlayListRenderItem = ({ item }: any) => (
    <>
      <TouchableOpacity key={item} >
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
            <Text style={styles.label}>Playlist</Text>

          } />
          <View style={styles.folderContainer}>
            <SearchBar Playlist={playList}
              placeholder="Search Products"
            // onPress={item =>
            //   navigation={navigation.navigate('Playlist')}, {
            //     item,
            //   })
            // }
            // navigation={navigation.navigate('Playlist')}
            />

            <TouchableOpacity style={styles.newListLabel} >
              <View style={{ width: '3%' }} />
              <Ionicons
                name="add-circle-outline"
                style={[styles.secondaryControl, addPlaylist ? styles.on : styles.off]}
                size={30}
                color={theme.colors.primary}
              />
              <Text style={styles.name}>Create new playlist</Text>
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

        {/* </Modal> */}
      </View>
    </>

  );
};

export default PlaylistAndAlbumsShimmer;
