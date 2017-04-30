import { Navigation } from 'react-native-navigation';
import { iconsMap, iconsLoaded } from './api-icon/app-icon.js';

import { registerScreens } from './screens';
registerScreens(); // this is where you register all of your app's screens


iconsLoaded.then(() => {
  startApp();
});


function startApp() {

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Main',
      screen: 'chef.MainScreen', // this is a registered name for a screen
      icon: iconsMap['ios-home-outline'],
      selectedIcon: iconsMap['ios-home'], // iOS only
      title: 'Main Menu'
    },
    {
      label: 'Recipes',
      screen: 'chef.MenuScreen',
      icon: iconsMap['ios-bookmarks-outline'],
      selectedIcon: iconsMap['ios-bookmarks'], // iOS only
      title: 'Recipes'
    },
    {
      label: 'Nearby',
      screen: 'chef.MapScreen',
      icon: iconsMap['ios-basket-outline'],
      selectedIcon: iconsMap['ios-basket'], // iOS only
      title: 'Nearby'
    },
    {
      label: 'Health',
      screen: 'chef.HealthScreen',
      icon: iconsMap['ios-leaf-outline'],
      selectedIcon: iconsMap['ios-leaf'], // iOS only
      title: 'Health'
    }
  ]
});

}