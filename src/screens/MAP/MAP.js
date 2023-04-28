//* REACT IMPORTS \\
import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { WebView } from 'react-native-webview';

//* REACT NATIVE MAPS \\
import MapView, { Marker, Callout } from 'react-native-maps';

//* STYLE, THEME IMPORTS \\
import { styles } from './styles';

//* MAP SCREEN CODE \\
let artLocations = [
  {
    name: 'Art Takes Over Topeka',
    location: {
      latitude: 39.06779027821405,
      longitude: -95.66678227856755,
    },
    artist: 'Jennifer B., Melanie D. & Jewelia O.'
  },
  {
    name: 'Sunflowers & Flying Pigs',
    location: {
      latitude: 39.06810004520989,
      longitude: -95.66710313782096,
    },
    artist: 'Jennifer B., Melanie D. & Jewelia O.'
  },
  {
    name: 'Aegir the Giant Brewer',
    location: {
      latitude: 39.067079111800936,
      longitude: -95.66646980121732,
    },
    artist: 'Emily Rudy'
  },
];

const markerImg = { uri: 'https://res.cloudinary.com/dwpkjvars/image/upload/v1682650222/paint-brush-g2f9855a50_640_pll3tl.png' };

const MAP = () => {
  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocations = () => {
    return artLocations.map((item, i) => {
      return (
        <Marker
          key={i}
          coordinate={item.location}
          title={item.name}
          description={item.artist}
        >

          <Image style={styles.markerImg} source={markerImg} />

          <Callout>
            <Text>{item.name}</Text>
          </Callout>
        </Marker>
      )
    });
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
        mapType='satellite'
        showsUserLocation={true}
      >
        {showLocations()}
      </MapView>
      <ImageBackground
        style={styles.body}
        source={require('../../../assets/Footer2.png')}
      >
      </ImageBackground>
    </View >
  );
};

export default MAP;
