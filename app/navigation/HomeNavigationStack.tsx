import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ILoginState} from 'models/reducers/login';
import ThemeController from '../components/ThemeController';
import Home from 'screens/Home';
import Settings from 'screens/Settings';
import Favorites from 'screens/Favorites';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

interface IState {
  loginReducer: ILoginState;
}
const HomeNavigationStack = () => {
  return (
    <AppStack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}} 
      
    />
    <Stack.Screen
      name="Favorites"
      component={Favorites}
      options={{headerShown: false}} 
      // options={{
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //     fontSize:20,
      //     color:"black",
      //   },
      //   // When logging out, a pop animation feels intuitive
      //   // You can remove this if you want the default 'push' animation
      // }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{headerShown: false}} 
    />
  </AppStack.Navigator>
  );
};
export default HomeNavigationStack;
