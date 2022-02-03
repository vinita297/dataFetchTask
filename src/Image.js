import React, { useState } from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';

var { height, width } = Dimensions.get('window');

const ImageScreen = (props) => {

  const [loading, setLoading] = useState(true);

  // setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'#000'}
        barStyle="light-content"
      />
      {loading ?
        <View style={styles.activityIndicator}>
          <ActivityIndicator
            visible={loading}
            size="large"
            color="#0000ff" />
        </View>
        :
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.route.params.data,
          }}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  activityIndicator: {
    alignItems: 'center',
    marginTop: height / 2.3
  }
});


export default ImageScreen;
