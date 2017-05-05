import { Navigation } from 'react-native-navigation';

import MainScreen from './MainScreen';
import MapScreen from './MapScreen';
import MenuScreen from './MenuScreen';
import HealthScreen from './HealthScreen';
import RowHealthScreen from './RowHealthScreen';
import InfoHealthScreen from './InfoHealthScreen';
import newMenu from './subscreens/newMenu';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('chef.MainScreen', () => MainScreen);
  Navigation.registerComponent('chef.MapScreen', () => MapScreen);
  Navigation.registerComponent('chef.MenuScreen', () => MenuScreen);
  Navigation.registerComponent('chef.HealthScreen', () => HealthScreen);
  Navigation.registerComponent('chef.RowHealthScreen', () => RowHealthScreen);
  Navigation.registerComponent('chef.InfoHealthScreen', () => InfoHealthScreen);
  Navigation.registerComponent('chef.newMenu', () => newMenu);
}
