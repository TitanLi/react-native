/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import {name as appName} from './app.json';
import {createStackNavigator,} from 'react-navigation';

const App = createStackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
  },
  {
    initialRouteName: 'Main',
  });

AppRegistry.registerComponent(appName, () => App);
