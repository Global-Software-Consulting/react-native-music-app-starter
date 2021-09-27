import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity,ListRenderItemInfo, ScrollView, RefreshControl } from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import i18n from '../../config/Languages/i18n';
import MusicCard from '../../components/Music/MusicCard';
import PlaylistCard from '../../components/Playlist/PlaylistCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import HomeShimmer from './Shimmer';
import { IState, IPState ,Itrack,IPlaylist} from "./types";
import {
  isPlayerShow,
  playerListRequest,
} from '../../store/actions/playerActions';
import { AppState } from '../../models/reducers/app';
import { musicListRequest } from '../../store/actions/appActions';

const initI18n = i18n;
const HomeComponent: React.FC<IState> = (props): JSX.Element => {
  const musicList = useSelector((state:IState) => state.appReducer?.musicList);
  const playList = useSelector((state: IPState) => state.playerReducer?.playList);
  const isLoader = useSelector((state: IState) => state.loadingReducer?.isLoginLoading);
  const isVisible = useIsFocused();
  // type homeScreenProp = StackNavigationProp<RootStackParamList, 'Player'>;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userPlaylist, setUserPlaylist] = useState<any>([]);
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  useEffect(() => {
    if (isVisible) {
      setUserPlaylist(playList);
    }
    else {
      // console.log("Nothing");

    }
  }, [playList.length, isVisible])
  const getMusicList = async () => {
    dispatch(musicListRequest());
  };

  const onRefresh = () => {

    getMusicList();
    if (isLoader) {
      <HomeShimmer />;
    } else {

    }
  };

  const RecommendedRenderItem = ({ item }:{item: Itrack} ) => (
    <MusicCard
      name={item.title}
      model={item.artist}
      img={item.artwork}
      onPress={() => {
        dispatch(isPlayerShow(true));
        dispatch(playerListRequest(item));
      }}
    />
  );
  const PlayListRenderItem = ( { item }:{item: IPlaylist}) => (
    <>


      <TouchableOpacity onPress={() => navigation.navigate('Playlist', { item: item })}>
        <PlaylistCard
          name={item.name}
          img={item.songs.length > 0 ? item.songs[0].artwork : `https://picsum.photos/150/200/?random=${Math.random()}`}
          onPress={() => {
            // dispatch(playerListRequest(item));
            navigation.navigate('Playlist', { item: item })
          }}
        />
      </TouchableOpacity>
    </>
  );


  return (
    <>
      <View style={styles.container}>
        <ScrollView nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl
              refreshing={isLoader}
              onRefresh={onRefresh}
            />
          }
        >
          <Header title="Recommended for you" />
          {musicList?.length > 0 ? (
            <FlatList
              contentContainerStyle={{ alignSelf: 'flex-start' }}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={musicList}
              scrollEventThrottle={2}
              renderItem={RecommendedRenderItem}
            />
          ) : (
            <View style={styles.container}>
              <Text style={styles.model}>No Reommendations Available</Text>
            </View>
          )}
          <Header title="My Playlist" />

          {userPlaylist?.length > 0 ? (
            <FlatList
              contentContainerStyle={{ alignSelf: 'flex-start' }}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={userPlaylist}
              renderItem={PlayListRenderItem}

            />
          ) : (
            <View style={styles.container}>
              <Text style={styles.model}>Playlist Empty</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default HomeComponent;
