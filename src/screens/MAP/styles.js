//* REACT IMPORTS \\
import { StyleSheet, Dimensions, Platform, StatusBar, } from "react-native";

//* THEME IMPORTS \\
import { palette, system } from "../../theme/colors";

//* STYLE EXPORT CODE \\
const { height, width } = Dimensions.get('window');
const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: system.white,
  },
  map: {
    width: width,
    aspectRatio: 3 / 4,

  },
  body: {
    flex: 1,
    // backgroundColor: palette.primary,
    borderTopColor: palette.accent3,
    borderTopWidth: 5,
  },
  markerImg: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
});
