/** @format */

import { AppRegistry } from 'react-native';
// import App from './App';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        header:null
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        header:null
      })
    },
  },
  {
    initialRouteName: 'Profile',
  }
);

AppRegistry.registerComponent(appName, () => App);
