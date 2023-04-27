//* REACT IMPORTS \\
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import MapView from 'react-native-maps';

//* STYLE, THEME IMPORTS \\
import { styles } from './styles';

//* MAP SCREEN CODE \\
const MAP = () => {
  const onRegionChange = (region) => {
    console.log(region);
  };

  return (
    <View style={styles.page}>
      <MapView
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 39.067516650665524,
          latitudeDelta: 0.004936772923464616,
          longitude: -95.6667091883719,
          longitudeDelta: 0.004790760576725006
        }}
        mapType='hybrid'

      >

      </MapView>
      <ImageBackground
        style={styles.body}
        source={require('../../../assets/Footer.png')}
      >
      </ImageBackground>
    </View >
  );
};

export default MAP;
