//* REACT IMPORTS \\
import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

//* REACT NATIVE CAROUSEL \\
import Carousel from 'react-native-snap-carousel';

//* STYLE, THEME, ICON IMPORTS \\
import { styles } from './styles';
import { palette } from '../../theme/colors';

//* CAROUSEL MAP SCREEN CODE \\
const markerImg = { uri: 'https://res.cloudinary.com/dwpkjvars/image/upload/c_scale,w_200/v1682650222/NOTO/paint-brush-g2f9855a50_640_pll3tl.png' };

const CarouselMap = () => {

  state = {
    markers: [],
    coordinates: [
      {
        name: 'Art Takes Over Topeka',
        latitude: 39.06779027821405,
        longitude: -95.66678227856755,
        image: 'https://res.cloudinary.com/dwpkjvars/image/upload/v1682710257/TakeOverTopeka_k5vdsb.png'
      },
      {
        name: 'Sunflowers & Flying Pigs',
        latitude: 39.06810004520989,
        longitude: -95.66710313782096,
        image: 'https://res.cloudinary.com/dwpkjvars/image/upload/v1682710635/SunflowersAndFlyingPigs_aefafc.png'
      },
      {
        name: 'Topeka Postcard',
        latitude: 39.06847399796273,
        longitude: -95.66593444240476,
        image: 'https://res.cloudinary.com/dwpkjvars/image/upload/v1682710640/NOTO/TopekaPostcard_vvmuoz.png'
      },
    ]
  };

  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    })

    this.state.markers[index].showCallout()
  };

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    });

    this._carousel.snapToItem(index);
  };

  renderCarouselItem = ({ item }) =>
    <TouchableOpacity style={styles.cardContainer} >
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={{ uri: item.image }} />
    </TouchableOpacity>

  return (
    <View style={styles.page}>
      <ImageBackground
        style={styles.body}
        source={require('../../../assets/Footer.png')}
      >
      </ImageBackground>
      <MapView
        // provider={PROVIDER_GOOGLE}
        ref={map => this._map = map}
        showsUserLocation={true}
        style={styles.map}
        initialRegion={{
          latitude: 39.067516650665524,
          latitudeDelta: 0.004936772923464616,
          longitude: -95.6667091883719,
          longitudeDelta: 0.004790760576725006
        }}
        mapType='satellite'
      >

        {
          this.state.coordinates.map((marker, index) => (
            <Marker
              key={marker.name}
              ref={ref => this.state.markers[index] = ref}
              onPress={() => this.onMarkerPressed(marker, index)}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              image={markerImg}
              icon={markerImg}
            >
              <Callout>
                <Text>{marker.name}</Text>
              </Callout>
            </Marker>
          ))
        }

      </MapView>

      <Carousel
        layout='tinder'
        ref={(c) => { this._carousel = c; }}
        data={this.state.coordinates}
        containerCustomStyle={styles.carousel}
        renderItem={this.renderCarouselItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={250}
        removeClippedSubviews={false}
        onSnapToItem={(index) => this.onCarouselItemChange(index)}
      />
    </View>
  );
};

export default CarouselMap;
