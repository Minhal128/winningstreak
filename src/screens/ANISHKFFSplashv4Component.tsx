import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import WaveBackground from '../components/WaveBackground';
import Logo from '../components/Logo';

const { width, height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function ANISHKFFSplashv4Component({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Logo and title centered */}
      <View style={styles.center}>
        <Logo size={width * 0.65} />
        <Text style={styles.title}>Winning</Text>
        <Text style={styles.subtitle}>STREAK</Text>
      </View>

      {/* Wave background at bottom */}
      <WaveBackground />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: 'rgba(31,95,78,1)',
    fontFamily: 'DMSans_700Bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255,199,39,1)',
    letterSpacing: 7.2,
    fontFamily: 'Montserrat_600SemiBold',
    marginTop: 2,
  },
});
