import React, { useState } from 'react';
import { View, ScrollView, FlatList, RefreshControl, ToastAndroid } from 'react-native';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import i18n from "../../config/Languages/i18n";
import { tracks } from '../../data/tracks';
import { useSelector} from 'react-redux';
import MusicCardShimmer from '../../components/Music/MusicCardShimmer';
import {ILoading} from '../../models/reducers/loading';
const initI18n = i18n;

interface IState {
  loadingReducer: ILoading;
}

interface Itrack {

  id: string
  url: string
  title: string
  artist: string
  artwork: string
  album: string
  duration: number
};

const Home: React.FC<any> = (props): JSX.Element => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const isLoading = useSelector((state:IState) => state.loadingReducer.isLoginLoading);

  const [listData, setListData] = useState<any>(tracks);
  const { t, i18n } = useTranslation();
  const Track: Itrack[] = tracks;
  const styles = useStyles();
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }


  const PlayListRenderItem = ({ item }: any) => (

    <MusicCardShimmer
      name={item.title}
      model={item.album}
      img={item.artwork}
    />


  );
  const RecommendedRenderItem = ({ item }: any) => (

    <MusicCardShimmer
      name={item.title}
      model={item.album}
      img={item.artwork}
    />


  );

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          refreshControl={<RefreshControl
            refreshing={isLoading}
          />}
        >
          <Header title="Recommended for you" />
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Track}
            scrollEventThrottle={2}
            keyExtractor={(item) => item.id}
            renderItem={RecommendedRenderItem}


          />
          <Header title="My Playlist" />

          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Track}
            keyExtractor={(item) => item.id}
            // renderItem={renderItemsss}
            renderItem={PlayListRenderItem}


          />
        </ScrollView>

      </View>
    </>
  );
};

export default Home;
