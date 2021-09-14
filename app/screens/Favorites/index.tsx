import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, RefreshControl } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerParamList } from '../../navigation/DrawerNavigator';
import FavoriteShimmer from './Shimmer';
import Favorite from './Conatiner';
import { IAppState } from '../../models/reducers/app';
import {ILoading} from '../../models/reducers/loading';
import { favoriteListRequest } from '../../store/actions/appActions';

interface IState {
  appReducer: IAppState;
  loadingReducer: ILoading;
}
const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state:IState) => state.loadingReducer.isLoginLoading);
  const favoriteList = useSelector((state:IState) => state.appReducer.favoriteList);

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  type homeScreenProp = StackNavigationProp<DrawerParamList, 'Home'>;
  const navigation = useNavigation<homeScreenProp>();
  const styles = useStyles();
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  useEffect(() => {
    onRefresh();
  }, []);
  
  const onRefresh = () => {
    // getFavoriteList();
    if (isLoading) {
      <FavoriteShimmer />;
    } else {
      
    }
  };
 console.log("favLoderfavLoderfavLoderfavLoder:",isLoading);
 
  return (



    <View style={styles.container}>
      <AppHeader
        renderLeft={<LeftArrowIcon
          name="keyboard-arrow-left"
          style={styles.icon}
          size={30}
          onPress={() => navigation.navigate('Home')}
        />}
      />
 
        {isLoading ? (
          <FavoriteShimmer />
        ) : (
          <Favorite />
        )}
    </View>


  );
};

export default Favorites;
