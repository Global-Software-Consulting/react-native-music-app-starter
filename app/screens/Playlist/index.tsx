import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerParamList } from '../../navigation/DrawerNavigator';
import PlaylistShimmer from './PlaylistShimmer';
import PlaylistConatiner from './PlaylistConatiner';
import { IAppState } from '../../models/reducers/app';
import { ILoading } from '../../models/reducers/loading';
import {playerListRequest, updatePlayList} from '../../store/actions/playerActions';
import { useRoute, useNavigation } from '@react-navigation/native';

interface IState {
  appReducer: IAppState;
  loadingReducer: ILoading;
}
const Playlist: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: IState) => state.loadingReducer.isLoginLoading);

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  type homeScreenProp = StackNavigationProp<DrawerParamList, 'Home'>;
  const navigation = useNavigation<homeScreenProp>();
  const styles = useStyles();
  const route: any = useRoute();
  const item = route.params.item;
  useEffect(() => {
    // onRefresh();
    if (isLoading) {
      <PlaylistShimmer />;
    } else {
     <PlaylistConatiner/>
    }
  }, []);


  // const onRefresh = () => {
  

  //   if (isLoading) {
  //     <PlaylistShimmer />;
  //   } else {
  //    <PlaylistConatiner/>
  //   }
  // };
  return (



    <View style={styles.container}>
      <AppHeader
        renderLeft={
          <View style={{flexDirection:'row'}}>
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
          </ TouchableOpacity>
          <View style={styles.labelWrapper}/>
         
          <Text style={styles.label}>Playlist</Text>
         
          </View>
          }

      />
      {isLoading ? (
        <PlaylistShimmer />
      ) : (
        <PlaylistConatiner />
      )}
    </View>


  );
};

export default Playlist;
