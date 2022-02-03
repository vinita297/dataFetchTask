import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

var { height, width } = Dimensions.get('window');

const ImageScreen = (props) => {

  console.log('props', props.route.params.data)

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'#000'}
        barStyle="light-content"
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: props.route.params.data,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: width,
    height: height,
    resizeMode: 'contain'

  },
});


export default ImageScreen;
