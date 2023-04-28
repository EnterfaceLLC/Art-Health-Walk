//* REACT IMPORTS \\
import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

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
  header: {
  },
  img: {
    width: width,
    aspectRatio: 4 / 3,
  },
  body: {
    flex: 1,
    // backgroundColor: palette.secondary,
    padding: 20,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    elevation: 3,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  titleTxt: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 15,
    color: system.white
  },
  bodyTxt: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    color: system.white,
  },
  button: {
    width: 120,
    height: 55,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    backgroundColor: palette.accent1,
    elevation: 5,
  },
  buttonTxt: {
    fontSize: 18,
    fontWeight: '500',
    color: system.white,
  }
});
