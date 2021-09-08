import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import Favorites from '../screens/Favorites';
import DrawerNavigator from './DrawerNavigator';

const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <AppStack.Navigator>
     
      <Stack.Screen
      name="HomeDrawer"
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
    </AppStack.Navigator>
  );
};
export default AppNavigation;
