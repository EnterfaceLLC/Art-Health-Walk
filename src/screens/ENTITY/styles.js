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
    justifyContent: 'center',
    alignItems: 'center',
  },
  notice: {
    fontSize: 24,
    marginVertical: 30,
  },
  txt: {
  },
  enterface: {
    fontSize: 24,
    fontWeight: '500',
  },
  img: {
    width: width,
    aspectRatio: 4 / 3,
  },
});
