//* NAVIGATION IMPORTS \\
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HOME from "../screens/HOME";
import MAP from "../screens/MAP/MAP";



//* SCREEN IMPORTS \\

//* STYLES, THEME, ICON IMPORTS \\

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