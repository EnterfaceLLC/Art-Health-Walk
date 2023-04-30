//* REACT IMPORTS \\
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

//* REACT NAVIGATION IMPORT \\
import { useNavigation } from '@react-navigation/native';

//* EXPO IMPORT \\
import { Image } from 'expo-image';

//* STYLE, THEME, ICON IMPORTS \\
import { styles } from './styles';
import { palette, system } from '../../theme/colors';
import { Entypo } from '@expo/vector-icons';

//* HOME SCREEN CODE \\

const HOME = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../../../assets/NOTOLogo.png')}
          contentFit='contain'
          transition={1500}
        />
      </View>
      <ImageBackground source={require('../../../assets/Body.png')} style={styles.body}>
        <View style={styles.content}>
          <View>
            <View style={styles.dots}>
              <Entypo name="dot-single" size={30} color={palette.accent2} />
              <Entypo name="dot-single" size={30} color={palette.accent3} />
              <Entypo name="dot-single" size={30} color={palette.accent4} />
              <Entypo name="dot-single" size={30} color={palette.accent6} />
              <Entypo name="dot-single" size={30} color={palette.tertiary} />
              <Entypo name="dot-single" size={30} color={'yellow'} />
            </View>
            <Text style={styles.titleTxt}>Welcome Art Enthusiasts</Text>
          </View>
          <Text style={styles.bodyTxt}>Cillum nostrud ipsum veniam duis nisi amet. Sit minim esse aliquip excepteur voluptate in ad pariatur elit. Ad culpa consequat magna reprehenderit laboris. Fugiat duis ut cupidatat duis labore exercitation veniam aliqua amet ea adipisicing anim id. Adipisicing cillum dolore.</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Explore NOTO')}
          >
            <Text style={styles.buttonTxt}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HOME;
