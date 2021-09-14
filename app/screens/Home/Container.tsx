import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,

} from 'react-native';
import { Text } from 'react-native-paper';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import i18n from '../../config/Languages/i18n';
import MusicCard from '../../components/Music/MusicCard';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteListRequest } from '../../store/actions/appActions';
import { useNavigation } from '@react-navigation/native';
import { IAppState } from '../../models/reducers/app';
import {ILoading} from '../../models/reducers/loading';

import Footer from '../../components/Footer';
const initI18n = i18n;

interface IState {
  appReducer: IAppState;
  loadingReducer: ILoading;
}
interface Itrack {

  id: string,
  url: string,
  title: string,
  artwork: string,
  artist: string,
  duration: number,

}
const HomeComponent: React.FC<any> = (props): JSX.Element => {
  const musicList = useSelector((state: IState) => state.appReducer.musicList);

  // type homeScreenProp = StackNavigationProp<RootStackParamList, 'Player'>;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
 


  const RecommendedRenderItem = ({ item }: any) => (
  
      <MusicCard
        name={item.title}
        model={item.artist}
        img={item.artwork}
        onPress={() =>
          navigation.navigate('Player', {
         hidePlayer:true,
         item:item
          })
        }
      />
  );
  const PlayListRenderItem = ({ item }: any) => (

    <TouchableOpacity
      key={item}
      onPress={() => { addToFavorites(item) }}
    >
      <MusicCard
        name={item.title}
        model={item.artist}
        img={item.artwork}
        onPress={() =>
          navigation.navigate('Player', {
            item: item,
            hidePlayer:true
         
         
          })
        }
      />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          nestedScrollEnabled={true}>
          <Header title="Recommended for you" />
          {props?.musicList?.length > 0 ? (
            <FlatList
              contentContainerStyle={{ alignSelf: 'flex-start' }}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={props.musicList}
              scrollEventThrottle={2}
              keyExtractor={item => item.id}
              renderItem={RecommendedRenderItem}
            />
          ) : (
            <View style={styles.container}>
              <Text style={styles.model}>No Reommendations Available</Text>
            </View>

          )}
          <Header title="My Playlist" />

          {props?.musicList?.length > 0 ? (
            <FlatList
              contentContainerStyle={{ alignSelf: 'flex-start' }}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={props.musicList}
              keyExtractor={item => item.id}
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
