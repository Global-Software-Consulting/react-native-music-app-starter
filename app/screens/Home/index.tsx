import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import useStyles from './styles';
import {useTranslation} from 'react-i18next';
import i18n from '../../config/Languages/i18n';
import HomeShimmer from './Shimmer';
import HomeComponent from './Container';
import musicList from '../../services/musicList';
import {useDispatch, useSelector} from 'react-redux';
import {musicListRequest} from '../../store/actions/appActions';
import {IAppState} from '../../models/reducers/app';
const initI18n = i18n;

interface IState {
  appReducer: IAppState;
}
const Home: React.FC<any> = (props): JSX.Element => {
  const musicList = useSelector((state: IState) => state.appReducer.musicList);

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {t, i18n} = useTranslation();
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
      wait(2000).then(() =>{ setRefreshing(false)});
    }
  };

  return (
    <>
    
      <View style={styles.container}>
 
          {refreshing ? (
            <HomeShimmer />
          ) : (
            <HomeComponent musicList={musicList} />
          )}
      </View>
    </>
  );
};

export default Home;
