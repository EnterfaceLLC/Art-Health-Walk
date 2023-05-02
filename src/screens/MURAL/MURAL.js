//* REACT IMPORTS \\
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

//* EXPO IMAGE IMPORT \\
import { Image } from 'expo-image';

//* STYLE, THEME, ICON IMPORTS \\
import { styles } from './styles';
import { palette } from '../../theme/colors';
import { Entypo } from '@expo/vector-icons';


const muralImg = 'https://res.cloudinary.com/dwpkjvars/image/upload/v1682710257/NOTO/TakeOverTopeka_k5vdsb.png';

const JenB = 'https://res.cloudinary.com/dwpkjvars/image/upload/v1682912430/NOTO/Jen.B_pqsjcu.png';

//* MURAL SCREEN CODE \\
const MURAL = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={{ uri: muralImg }}
          transition={500}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.titleCont}>
          <Text style={styles.title}>"Art Take Over Topeka"</Text>
          <Text style={styles.location}>901 N. Kansas Ave</Text>
        </View>
        <View style={styles.subTitleCont}>
          <Text style={styles.subTitle}>Jennifer Bohlander</Text>
        </View>

        <View style={styles.artistCont}>
          <TouchableOpacity style={styles.social}>
            <Entypo name="facebook-with-circle" size={25} color={palette.accent1} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Entypo name="instagram-with-circle" size={25} color={palette.primary} />
          </TouchableOpacity>
          <Image style={styles.artistImg} source={{ uri: JenB }} />
        </View>

        <View style={styles.headingCont}>
          <Text style={styles.headingTxt}>About the Mural</Text>
        </View>

        <View style={styles.infoCont}>
          {/* <Text style={styles.infoTitle}>About the Mural</Text> */}
          <Text style={styles.infoTxt}>
            This mural is found on the south side of Kaw River Rustics. It was painted by artists Jennifer Bohlander, Melanie Downie & Jewelia Oswald.
          </Text>
          <Text style={styles.infoTxt}>
            "I have seen a major impact on Topeka by the arts, thanks to many people and organizations. Elephants, to me are the most wonderful animal encompassing intelligence and compassion."
          </Text>
        </View>

      </View>
    </View >
  );
};

export default MURAL;
