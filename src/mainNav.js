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
      title: 'Main'
    },
    {
      label: 'Recipes',
      screen: 'chef.popular',
      icon: iconsMap['ios-bookmarks-outline'],
      selectedIcon: iconsMap['ios-bookmarks'], // iOS only
      title: 'Popular Recipes'
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
  ],
  tabsStyle: {
    tabBarButtonColor: 'gray', // change the color of the tab icons and text (also unselected)
    tabBarSelectedButtonColor: '#ff9900', // change the color of the selected tab icon and text (only selected)
    tabBarBackgroundColor: 'rgba(28, 28, 40, 0.4)', // change the background color of the tab bar
    tabBarTranslucent: true,
  }
});

}
