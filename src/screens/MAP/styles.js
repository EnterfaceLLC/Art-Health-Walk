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
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    width: width,
    aspectRatio: 2 / 3,
  },
  body: {
    flex: 1,
    borderBottomColor: palette.tertiary,
    borderBottomWidth: 5,
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.60)'
  },
  cardContainer: {
    backgroundColor: palette.accent3,
    height: 150,
    width: 250,
    padding: 10,
    borderRadius: 24
  },
  cardImage: {
    height: 110,
    width: 250,
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'
  },
  markerImg: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
});
