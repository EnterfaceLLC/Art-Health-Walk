//* NAVIGATION IMPORTS \\
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//* SCREEN IMPORTS \\
import HOME from "../screens/HOME";
import MAP from "../screens/MAP/MAP";

//* STYLES, THEME, ICON IMPORTS \\
import { palette, system } from '../theme/colors';

//* DRAWER NAVIGATION CODE \\
const Draw = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Draw.Navigator>
        <Draw.Screen
          name="Welcome"
          component={HOME}
          options={{
            headerStyle: { backgroundColor: palette.accent1, borderBottomColor: palette.tertiary, borderBottomWidth: 5 },
            headerTitleStyle: { color: system.white },
            headerTintColor: system.white
          }}
        />
        <Draw.Screen
          name="Explore NOTO"
          component={MAP}
          options={{
            headerStyle: { backgroundColor: palette.accent3, borderBottomColor: palette.tertiary, borderBottomWidth: 5 },
            headerTitleStyle: { color: system.white },
            headerTintColor: system.white
          }}
        />
      </Draw.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNav;
