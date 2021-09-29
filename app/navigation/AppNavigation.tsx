import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites';
import DrawerNavigator from './DrawerNavigator';
import Footer from '../components/player/index';
import Playlist from '../screens/Playlist';
import PlaylistAndAlbums from '../screens/PlaylistAndAlbums';
import { CompositeScreenProps } from '@react-navigation/native';
import { PlaylistProps } from '../screens/Home/types';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerParamList } from './DrawerNavigator';

const AppStack = createNativeStackNavigator<AppScreenNavigationProp>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export type AppScreenNavigationProp = CompositeScreenProps<
    DrawerScreenProps<DrawerParamList>,
    StackScreenProps<RootStackParamList>
>;
export type RootStackParamList = {
    DrawerNavigator: any;
    Favorites: any;
    Settings: any;
    Player: any;
    Playlist: {
        item: {
            item?: PlaylistProps;
        };
    };
    PlaylistAndAlbums: any;
};

const AppNavigation = () => {
    return (
        <>
            <AppStack.Navigator>
                <Stack.Screen
                    name="DrawerNavigator"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Playlist"
                    component={Playlist}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PlaylistAndAlbums"
                    component={PlaylistAndAlbums}
                    options={{ headerShown: false }}
                />
            </AppStack.Navigator>
            <>
                <Footer />
            </>
        </>
    );
};
export default AppNavigation;
