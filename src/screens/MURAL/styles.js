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
  header: {
    borderBottomWidth: 2,
    borderColor: palette.accent3,
  },
  img: {
    width: 400,
    height: 200,
  },
  body: {
    flex: 1,
    // backgroundColor: 'blue'
  },
  titleCont: {
    height: 50,
    paddingLeft: 15,
    marginLeft: '15%',
    marginVertical: 25,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: palette.accent3,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: system.white,
  },
  location: {
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 15,
  },
  subTitleCont: {
    height: 50,
    paddingLeft: 15,
    marginLeft: '35%',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: palette.secondary,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: system.white,
  },
  artistCont: {
    width: width,
    flexDirection: 'row',
    marginTop: 20,
    paddingRight: 10,
    alignItems: 'baseline',
    justifyContent: 'flex-end'
  },
  artistImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: palette.accent2,
    borderWidth: 2.5,
  },
  headingCont: {
    height: 40,
    paddingLeft: 15,
    marginRight: '50%',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: palette.accent4,
  },
  headingTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: system.white,
  },
  infoCont: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    textAlign: 'right',
  },
  infoTxt: {
    textAlign: 'justify',
    marginBottom: 5,
  },
  social: {
    paddingRight: 7
  }
});