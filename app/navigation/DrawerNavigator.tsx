import * as React from 'react';
import Drawer from '../screens/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
const AppDrawer = createDrawerNavigator<DrawerParamList>();

export type DrawerParamList = {
  
  Home:undefined,

};
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
