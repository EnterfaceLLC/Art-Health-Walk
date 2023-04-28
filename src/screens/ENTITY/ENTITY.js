//* REACT IMPORTS \\
import React from 'react';
import { View, Text } from 'react-native';

//* EXPO IMPORT \\
import { Image } from 'expo-image';

//* STYLE, THEME IMPORTS \\
import { styles } from './styles';

//* ENTITY CODE \\
const ENTITY = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.notice}>...Concept Coming Soon</Text>
      <Text style={styles.txt}>developed by</Text>
      <Text style={styles.enterface}><Text style={{ color: 'tomato' }}>.</Text>Enterface, LLC</Text>
      <Image
        style={styles.img}
        source={require('../../../assets/EnterF.png')}
        contentFit='contain'
        transition={1000}
      />
    </View>
  );
};

export default ENTITY;
