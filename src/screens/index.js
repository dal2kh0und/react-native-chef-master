import { Navigation } from 'react-native-navigation';

import MainScreen from './MainScreen';
import MapScreen from './MapScreen';
import MenuScreen from './MenuScreen';
import HealthScreen from './HealthScreen';
import recommend from './subscreens/recommend';
import popular from './subscreens/popular';
import menuinfo from './subscreens/menuinfo';
import webview from './subscreens/webview';
import coffee from './subscreens/coffee';
import sweet from './subscreens/sweet';
import menudata from './subscreens/menudata';
import healthdata from './subscreens/healthdata';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('chef.MainScreen', () => MainScreen);
  Navigation.registerComponent('chef.MapScreen', () => MapScreen);
  Navigation.registerComponent('chef.MenuScreen', () => MenuScreen);
  Navigation.registerComponent('chef.HealthScreen', () => HealthScreen);
  Navigation.registerComponent('chef.recommend', () => recommend);
  Navigation.registerComponent('chef.popular', () => popular);
  Navigation.registerComponent('chef.menuinfo', () => menuinfo);
  Navigation.registerComponent('chef.webview', () => webview);
  Navigation.registerComponent('chef.coffee', () => coffee);
  Navigation.registerComponent('chef.sweet', () => sweet);
  Navigation.registerComponent('chef.menudata', () => menudata);
  Navigation.registerComponent('chef.healthdata', () => healthdata);
}
