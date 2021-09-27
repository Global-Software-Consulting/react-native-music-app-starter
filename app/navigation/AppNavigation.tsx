import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites';
import DrawerNavigator from './DrawerNavigator';
import Footer from '../components/player/index';
import { PlayerState } from '../models/reducers/player';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import Playlist from '../screens/Playlist';
import PlaylistAndAlbums from '../screens/PlaylistAndAlbums';
import { View, Text, Button } from 'react-native';

const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  DrawerNavigator: any;
  Favorites: any;
  Settings: any;
  Player: any;
  Playlist: any;
  PlaylistAndAlbums: any;
};
interface IState {
  playerReducer: PlayerState;
}
const AppNavigation = () => {
  const [isShowFooter, setIsShowFooter] = useState<boolean>(true);
  const [isModalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setModalVisible(true);
  }, []);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}>
      <Text>Swipe down to close</Text>
    </View>
  );
  const route = useRoute();
  return (
    <>
      <AppStack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{ headerShown: false }}

        />



        <Stack.Screen
          name="Playlist"
          component={Playlist}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="PlaylistAndAlbums"
          component={PlaylistAndAlbums}
          options={{ headerShown: false }}

        />
      </AppStack.Navigator>
      <>
        <Footer />
      </>
    </>
  );
};
export default AppNavigation;
