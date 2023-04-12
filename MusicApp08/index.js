// /**
//  * @format
//  */
// import TrackPlayer from 'react-native-track-player';
// import {AppRegistry} from 'react-native';
// import App from './src/App';
// import {name as appName} from './app.json';
// import { playbackService } from './musicPlayerServics';

// AppRegistry.registerComponent(appName, () => App);
// // AppRegistry.registerComponent(...) from TrackPlayer;
// TrackPlayer.registerPlaybackService(() => playbackService);

/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {playbackService} from './musicPlayerServics'

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);