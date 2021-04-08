/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Dashboard from './src/dashboard';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Dashboard);
