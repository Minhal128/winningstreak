import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function WaveBackground() {
  return (
    <Image
      source={require('../../assets/wave.png')}
      style={styles.wave}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  wave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: width,
    height: 280,
  },
});
