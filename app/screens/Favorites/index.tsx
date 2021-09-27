import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
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
import { AppState } from '../../models/reducers/app';
import { Loading } from '../../models/reducers/loading';

interface IState {
  appReducer: AppState;
  loadingReducer: Loading;
}
const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: IState) => state.loadingReducer.isLoginLoading);

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  type homeScreenProp = StackNavigationProp<DrawerParamList, 'Home'>;
  const navigation = useNavigation<homeScreenProp>();
  const styles = useStyles();
 
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

  return (



    <View style={styles.container}>
      <AppHeader
        renderLeft={
          <TouchableOpacity
            style={{ paddingHorizontal: 20 }}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <LeftArrowIcon
              name="keyboard-arrow-left"
              style={styles.icon}
              size={30}

            />
          </ TouchableOpacity>}

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
