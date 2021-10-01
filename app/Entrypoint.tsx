/**
 * React Native .
 * Everything starts from the Entry-point
 */
import React, { useEffect } from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { defaultTheme, darkTheme } from './config/theme';
import Navigator from './navigation';
import configureStore from './store';
import { ThemeState } from './models/reducers/theme';
import CodePush from 'react-native-code-push';

const { persistor, store } = configureStore();

interface IState {
    themeReducer: ThemeState;
}

const RootNavigation: React.FC = () => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
    const isDark = useSelector((state: IState) => state.themeReducer.isDark);
    return (
        <PaperProvider theme={isDark ? darkTheme : defaultTheme}>
            <Navigator />
        </PaperProvider>
    );
};

const EntryPoint: React.FC = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <RootNavigation />
            </PersistGate>
        </Provider>
    );
};

export default CodePush({
    updateDialog: true,
    installMode: CodePush.InstallMode.IMMEDIATE,
})(EntryPoint);
