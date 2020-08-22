import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile92980Navigator from '../features/UserProfile92980/navigator';
import Tutorial92979Navigator from '../features/Tutorial92979/navigator';
import NotificationList92951Navigator from '../features/NotificationList92951/navigator';
import Settings92950Navigator from '../features/Settings92950/navigator';
import Settings92942Navigator from '../features/Settings92942/navigator';
import UserProfile92940Navigator from '../features/UserProfile92940/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile92980: { screen: UserProfile92980Navigator },
Tutorial92979: { screen: Tutorial92979Navigator },
NotificationList92951: { screen: NotificationList92951Navigator },
Settings92950: { screen: Settings92950Navigator },
Settings92942: { screen: Settings92942Navigator },
UserProfile92940: { screen: UserProfile92940Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
