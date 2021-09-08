import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from '../screens/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
const AppDrawer = createDrawerNavigator();

const DrawerNavigator = () => {



  return (
    <AppDrawer.Navigator drawerContent={() => <Drawer />}>
      <AppDrawer.Screen name="Home" component={Home}
        options={{ drawerLabel: 'My Music App' }}
      />
    </AppDrawer.Navigator>
  );
};
export default DrawerNavigator;
