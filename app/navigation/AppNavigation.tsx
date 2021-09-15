import React, {  useState } from 'react';import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import Favorites from '../screens/Favorites';
import DrawerNavigator from './DrawerNavigator';
import Player from '../screens/Player';
import Footer from '../components/Footer';
import {IPlayerState  } from '../models/reducers/player';
import { useSelector } from 'react-redux';
import {useRoute} from '@react-navigation/native';


const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  DrawerNavigator: any,
  Favorites: any,
  Settings:any,
  Player:any,

};
interface IState {
  playerReducer: IPlayerState;
}
const AppNavigation = () => {
  const [isShowFooter, setIsShowFooter] = useState<boolean>(true);

const route = useRoute();
console.log("route:",route);
  return (
    <>
    <AppStack.Navigator>
     
   
      <Stack.Screen
      name="DrawerNavigator"
      component={DrawerNavigator}
      options={{headerShown: false}} 
      initialParams={{ itemId: 42 }}
      
    /> 
    
      <Stack.Screen
      name="Favorites"
      component={Favorites}
      options={{ headerShown: false }}
      initialParams={{ itemId: 43 }}

      />
  
      <Stack.Screen
      name="Settings"
        component={Settings}
        options={{ headerShown: false }}
        initialParams={{ itemId: 44 }}

        />
      
        <Stack.Screen
        name="Player"
        component={Player}
        options={{ headerShown: false }}
        initialParams={{ itemId: 45 }}

      />
   
    </AppStack.Navigator>
     {/* <Footer />  */}
    </>
  );
};
export default AppNavigation;
