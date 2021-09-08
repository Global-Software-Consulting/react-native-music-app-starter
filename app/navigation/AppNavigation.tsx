import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import Favorites from '../screens/Favorites';
import DrawerNavigator from './DrawerNavigator';
import Player from '../screens/Player';

const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  DrawerNavigator: undefined,
  Favorites: undefined,
  Settings:undefined,
  Player:undefined,

};

const AppNavigation = () => {
  return (
    <AppStack.Navigator>
     
      <Stack.Screen
      name="DrawerNavigator"
      component={DrawerNavigator}
      options={{headerShown: false}} 
      
    />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
  
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};
export default AppNavigation;
