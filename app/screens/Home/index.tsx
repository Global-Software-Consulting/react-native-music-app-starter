import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import {Text} from 'react-native-paper';
import useStyles from './styles';
import {useTranslation} from 'react-i18next';
import Header from '../../components/Header';
import i18n from '../../components/Languages/i18n';
import HomeShimmer from './component/HomeShimmer';
import HomeComponent from './component/HomeComponent';
import musicList from '../../services/musicList';
import {useDispatch, useSelector} from 'react-redux';
import {musicListRequest} from '../../store/actions/appActions';
const initI18n = i18n;
interface Itrack {
  id: string;
  url: string;
  title: string;
  artist: string;
  artwork: string;
  album: string;
  duration: number;
}

const Home: React.FC<any> = (props): JSX.Element => {
  const musicList = useSelector(state => state.appReducer.musicList);

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {t, i18n} = useTranslation();
  // const Track: Itrack[] = tracks;
  const styles = useStyles();
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  useEffect(() => {
    onRefresh();
  }, []);
  const getMusicList = async () => {
    dispatch(musicListRequest());
  };
  const onRefresh = () => {
    getMusicList();
    if (refreshing) {
      <HomeShimmer />;
    } else {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }
  };
  
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {refreshing ? (
            <HomeShimmer />
          ) : (
            <HomeComponent listData={musicList} />
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
