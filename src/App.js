import React from 'react';

import 'react-native-gesture-handler';
import {StatusBar, LogBox} from 'react-native';
import AppNavigation from './navigations';

if (!__DEV__) {
  console.log = () => null;
}

console.warn = () => {};
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <AppNavigation />
    </>
  );
};

export default App;
