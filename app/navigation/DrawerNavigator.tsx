import * as React from 'react';
import Drawer from './Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import Home from '../screens/Home';
import { PlaylistProps } from '../screens/Home/types';

const AppDrawer = createDrawerNavigator<DrawerParamList>();

export type DrawerParamList = {
    Home: {
        item: {
            item: PlaylistProps;
        };
    };
};
const DrawerNavigator = () => {
    const theme = useTheme();

    return (
        <AppDrawer.Navigator drawerContent={() => <Drawer />}>
            <AppDrawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerLabel: 'My Music App',
                    headerStyle: {
                        backgroundColor: theme.colors.accent, //Set Header color
                    },
                    headerTintColor: theme.colors.primary, //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </AppDrawer.Navigator>
    );
};
export default DrawerNavigator;
