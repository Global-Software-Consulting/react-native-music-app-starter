import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Drawer from '../screens/Drawer';
import Favorites from '../screens/Favorites/component/Favorite';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigationStack from './HomeNavigationStack';
import Home from '../screens/Home';
const AppDrawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <AppDrawer.Navigator drawerContent={() => <Drawer />}>
    <AppDrawer.Screen name="My Music App" component={Home}   options={{ drawerLabel: 'My Music App' }} />
    </AppDrawer.Navigator>
  );
};
export default DrawerNavigator;
