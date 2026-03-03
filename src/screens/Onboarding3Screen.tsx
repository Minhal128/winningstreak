import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../App';
import WaveBackground from '../components/WaveBackground';

const { width } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding3'>;

function PaginationDots({ active, total }: { active: number; total: number }) {
  return (
    <View style={dotStyles.container}>
      {Array.from({ length: total }, (_, i) => (
        <View
          key={i}
          style={[
            dotStyles.dot,
            i === active ? dotStyles.activeDot : dotStyles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
}

const dotStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  dot: {
    borderRadius: 4,
  },
  activeDot: {
    width: 24,
    height: 8,
    backgroundColor: '#1F5F4E',
    borderRadius: 4,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    backgroundColor: '#D9D9D9',
  },
});

export default function Onboarding3Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Onboarding</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>An Encouraging Community Awaits!</Text>

      {/* Card Image */}
      <View style={styles.cardContainer}>
        <Image
          source={require('../../assets/boarding3.png')}
          style={styles.cardImage}
          resizeMode="contain"
        />
      </View>

      {/* Pagination */}
      <PaginationDots active={2} total={5} />

      {/* Wave Background */}
      <WaveBackground />

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Onboarding4')}
        >
          <LinearGradient
            colors={['#88BA83', '#1A5540']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.continueButton}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    marginBottom: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#333333',
    fontFamily: 'Montserrat_700Bold',
  },
  skip: {
    fontSize: 16,
    color: '#1F5F4E',
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: '#333333',
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    lineHeight: 22,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  cardContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: -10,
  },
  cardImage: {
    width: width * 2,
    height: width * 1.8,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  continueButton: {
    width: 335,
    height: 57,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    letterSpacing: -0.24,
  },
});
