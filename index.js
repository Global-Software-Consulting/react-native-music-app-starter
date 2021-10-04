/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/Entrypoint';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
TrackPlayer.registerPlaybackService(() => require('./app/services/service.ts'));
