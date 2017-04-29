import { Navigation } from 'react-native-navigation';

import MainScreen from './MainScreen';
import MapScreen from './MapScreen';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('chef.MainScreen', () => MainScreen);
  Navigation.registerComponent('chef.MapScreen', () => MapScreen);
}