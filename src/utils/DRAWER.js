//* NAVIGATION IMPORTS \\
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//* SCREEN IMPORTS \\
import HOME from "../screens/HOME";
import MAP from "../screens/MAP/MAP";

//* STYLES, THEME, ICON IMPORTS \\
import { palette } from '../theme/colors';

//* DRAWER NAVIGATION CODE \\
const Draw = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Draw.Navigator>
        <Draw.Screen
          name="homeScreen"
          component={HOME}
        />
        <Draw.Screen
          name="mapScreen"
          component={MAP}
        />
      </Draw.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNav;
