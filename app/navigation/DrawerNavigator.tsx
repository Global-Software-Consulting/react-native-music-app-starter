import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Drawer from '../screens/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
const AppDrawer = createDrawerNavigator();

const DrawerNavigator = () => {



  return (
    <AppDrawer.Navigator drawerContent={() => <Drawer />}>
    <AppDrawer.Screen name="My Music App" component={Home} 
     options={{
      drawerLabel: "Settings",
      drawerIcon: ({ color }) => <Ionicons name="settings" size={24} style={ { color: color }} />
  }}
      // options={{ drawerLabel: 'My Music App' }}
      // options={{
      //   title: 'My Music App',
        // drawerIcon: ({tintColor}) => <Ionicons name="home" size={20} color={tintColor} />,
        // drawerIcon: ({focused, size}) => (
        //    <Ionicons
        //       name="md-home"
        //       size={size}
        //       // color={focused ? '#7cc' : '#ccc'}
        //    />
        // ),
   
      />
    </AppDrawer.Navigator>
  );
};
export default DrawerNavigator;
