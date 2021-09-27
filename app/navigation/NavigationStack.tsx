import * as React from 'react';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { navigationRef } from './NavigationService';
import { ThemeState } from './models/reducers/theme';
import { StatusBar } from 'react-native';
import AppNavigation from './AppNavigation';

const Stack = createNativeStackNavigator();

interface IState {
    themeReducer: ThemeState;
}

const NavigationStack: React.FC<IState> = () => {
    const isDark = useSelector((state: IState) => state.themeReducer.isDark);

    return (
        <NavigationContainer
            ref={navigationRef}
            theme={isDark ? NavigationDarkTheme : NavigationDefaultTheme}>
            <StatusBar barStyle={'light-content'} />

            <Stack.Navigator headerMode="none">
                {/* {isLoggedIn ? ( */}
                <Stack.Screen
                    name="AppNavigation"
                    component={AppNavigation}
                    options={{ headerShown: false }}
                />
                {/* ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigation}
            options={{headerShown: false}} 
            // options={{
            //   // When logging out, a pop animation feels intuitive
            //   // You can remove this if you want the default 'push' animation
            //   animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            //   // headerRight: () => <ThemeController />,
            // }}
          />
        )} */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationStack;
