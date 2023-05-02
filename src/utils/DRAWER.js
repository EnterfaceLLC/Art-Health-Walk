//* NAVIGATION IMPORTS \\
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* SCREEN IMPORTS \\
import HOME from "../screens/HOME";
import MAP from "../screens/MAP";
import ENTITY from "../screens/ENTITY";
import CarouselMap from "../screens/MAP/CAROUSEL";
import MURAL from "../screens/MURAL/MURAL";

//* STYLES, THEME, ICON IMPORTS \\
import { palette, system } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


//* DRAWER NAVIGATION CODE \\
const Draw = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Draw.Navigator
        screenOptions={{
          drawerStyle: { backgroundColor: system.white, width: '60%', borderBottomEndRadius: 75 },
          drawerActiveTintColor: palette.tertiary
        }}
      >
        <Draw.Screen
          name="Welcome"
          component={HOME}
          options={{
            headerStyle: { backgroundColor: palette.accent1, borderBottomColor: palette.tertiary, borderBottomWidth: 5 },
            headerTitleStyle: { color: system.white },
            headerTintColor: system.white,
            drawerActiveTintColor: palette.accent1,
            drawerIcon: ({ color }) => (
              <Ionicons name="color-palette" size={24} color={color} />
            )
          }}
        />
        <Draw.Screen
          name="Explore NOTO"
          component={StackNav}
          options={{
            headerStyle: { backgroundColor: palette.tertiary, borderBottomColor: palette.accent3, borderBottomWidth: 5 },
            headerTitleStyle: { color: system.white },
            headerTintColor: system.white,
            drawerActiveTintColor: palette.accent3,
            drawerIcon: ({ color }) => (
              <MaterialIcons name="directions-walk" size={24} color={color} />
            ),
          }}
        />
        <Draw.Screen
          name="NOTO Events"
          component={ENTITY}
          options={{
            headerStyle: { backgroundColor: palette.tertiary, borderBottomColor: palette.accent5, borderBottomWidth: 5 },
            headerTitleStyle: { color: system.white },
            headerTintColor: system.white,
            drawerActiveTintColor: palette.tertiary,
            drawerIcon: ({ color }) => (
              <Ionicons name="md-calendar-sharp" size={24} color={color} />
            )
          }}
        />
        <Draw.Screen
          name="About NOTO"
          component={ENTITY}
          options={{
            headerStyle: { backgroundColor: palette.accent6, borderBottomColor: palette.accent4, borderBottomWidth: 5 },
            headerTitleStyle: { color: system.white },
            headerTintColor: system.white,
            drawerActiveTintColor: palette.accent6,
            drawerIcon: ({ color }) => (
              <Ionicons name="md-people-sharp" size={24} color={color} />
            )
          }}
        />
      </Draw.Navigator>
    </NavigationContainer>
  );
};

//* DRAWER NAVIGATION CODE \\
const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='Art Health Walk'
        component={CarouselMap}
      />
      <Stack.Screen
        name='Mural Info'
        component={MURAL}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default DrawerNav;
