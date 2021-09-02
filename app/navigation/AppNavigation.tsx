import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ILoginState} from 'models/reducers/login';
import Drawer from 'screens/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import HomeNavigationStack from './HomeNavigationStack';
import Favorites from '../screens/Favorites';
const AppDrawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
interface IState {
  loginReducer: ILoginState;
}
const AppNavigation = () => {
  return (
    <AppDrawer.Navigator drawerContent={() => <Drawer />}>
    <AppDrawer.Screen name="My Music App" component={HomeNavigationStack}   options={{ drawerLabel: 'My Music App' }} />
    {/* <AppDrawer.Screen name="Fav" component={Favorites}   options={{ drawerLabel: 'My Music App' }} /> */}
    </AppDrawer.Navigator>
  );
};
export default AppNavigation;
