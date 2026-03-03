import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, {
  Path,
  Rect,
  Ellipse,
  Circle,
  G,
  ClipPath,
  Defs,
  RadialGradient,
  LinearGradient as SvgLinearGradient,
  Stop,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
} from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { RootStackParamList } from '../../App';
import WaveBackground from '../components/WaveBackground';

const { width } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding4'>;

function BackArrow() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
        fill="#1F5F4E"
      />
    </Svg>
  );
}

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

function AnimatedBlobSvg() {
  const pulseAnim = useRef(new Animated.Value(0.85)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.85,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={{
        transform: [{ scale: pulseAnim }, { rotate: rotation }],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Svg width={180} height={140} viewBox="0 0 335 203" fill="none">
        <Defs>
          <RadialGradient id="p0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210.463 82.1666) rotate(105.725) scale(57.4655 40.7603)">
            <Stop stopColor="#E2FFC5" />
            <Stop offset="1" stopColor="#55FEA2" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="p1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(117.019 46.7222) rotate(41.8305) scale(116.76 116.76)">
            <Stop stopColor="#5DFFFF" />
            <Stop offset="0.45" stopColor="#55FEA2" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="p2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(143.333 44.0371) rotate(61.1013) scale(76.6779)">
            <Stop stopColor="#5DFFFF" />
            <Stop offset="0.55" stopColor="#55FEA2" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="p3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(155.685 53.7037) rotate(61.3024) scale(74.8273 74.8273)">
            <Stop stopColor="#D6FFAD" />
            <Stop offset="0.5" stopColor="#55FEA2" stopOpacity="0" />
          </RadialGradient>
          <ClipPath id="clip0">
            <Rect width="144.511" height="138.556" fill="white" x="95" y="0" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#clip0)">
          <Ellipse cx="167.5" cy="69.2777" rx="68.2037" ry="68.2037" fill="url(#p0)" fillOpacity="0.5" />
          <Ellipse cx="167.5" cy="69.2777" rx="68.2037" ry="68.2037" fill="url(#p1)" fillOpacity="0.5" />
          <Circle opacity="0.5" cx="156.222" cy="64.4445" r="51.5556" fill="url(#p2)" />
          <Ellipse opacity="0.6" cx="170.722" cy="78.9445" rx="44.5741" ry="44.5741" fill="url(#p3)" />
          {/* Animated stroke paths - subset for performance */}
          <Path opacity="0.2" d="M203.502 52.7582C257.663 80.4332 178.036 150.691 157.951 109.231C148.334 89.3801 103.635 88.6549 109.27 66.2833C114.847 43.9442 134.129 40.2329 153.8 34.5041C178.219 27.393 187.676 44.6709 203.501 52.7567L203.502 52.7582Z" stroke="#48FAAA" strokeWidth="0.537037" strokeMiterlimit="10" />
          <Path opacity="0.36" d="M205.562 47.7771C243.462 77.6497 192.637 145.866 158.033 113.569C142.848 99.3951 100.452 77.8107 111.726 58.7591C122.88 39.7725 139.537 28.1244 157.677 31.1313C179.659 34.7748 192.015 37.0994 205.562 47.7771Z" stroke="#72FBA0" strokeWidth="0.537037" strokeMiterlimit="10" />
          <Path opacity="0.48" d="M207.109 44.0407C233.655 73.9488 204.25 141.555 158.098 116.821C139.032 106.604 98.0703 69.6762 113.571 53.1131C128.906 36.6401 143.605 18.8897 160.587 28.5971C180.749 40.1241 195.487 30.9439 207.11 44.0392L207.109 44.0407Z" stroke="#92FDA1" strokeWidth="0.537037" strokeMiterlimit="10" />
          <Path opacity="0.6" d="M208.655 40.3034C225.161 69.5011 215.839 136.501 158.16 120.072C135.18 113.527 95.6849 61.5408 115.413 47.4677C134.932 33.5098 147.78 9.60231 163.495 26.065C181.966 45.4164 199.647 24.3695 208.655 40.3034Z" stroke="#B2FEA3" strokeWidth="0.537037" strokeMiterlimit="10" />
          <Path d="M173.174 114.405C134.514 192.742 85.9647 52.8801 137.113 54.4967C162.727 55.305 154.006 -4.26355 179.063 0.580266C204.12 5.42409 195.117 30.1121 204.281 57.8306C215.727 92.4474 183.164 94.1611 173.174 114.405Z" stroke="#01F8F8" strokeWidth="0.537037" strokeMiterlimit="10" />
          <Path opacity="0.75" d="M177.563 117.758C137.917 176.37 87.6051 69.5546 132.866 53.7759C154.306 46.3009 165.309 -5.94256 185.844 4.87479C206.361 15.6166 205.585 38.8727 206.69 63.0054C208.06 92.9126 188.97 100.894 177.564 117.757L177.563 117.758Z" stroke="#17FACA" strokeWidth="0.537037" strokeMiterlimit="10" />
          <Path opacity="0.5" d="M181.951 121.11C143.495 160.434 88.8995 87.7476 128.615 53.0565C145.762 38.0789 176.611 -7.62138 192.623 9.17069C208.6 25.8105 216.158 47.5279 209.098 68.1816C200.528 93.251 195.236 107.525 181.951 121.11Z" stroke="#31FCB7" strokeWidth="0.537037" strokeMiterlimit="10" />
          <Path opacity="0.25" d="M186.34 124.463C151.483 146.15 91.3677 106.922 124.366 52.3367C137.709 30.2667 187.914 -9.30053 199.404 13.4651C210.84 36.0016 226.924 56.2355 211.507 73.3574C193.231 93.6549 202.21 114.588 186.34 124.463Z" stroke="#4DFFA2" strokeWidth="0.537037" strokeMiterlimit="10" />
        </G>
      </Svg>
    </Animated.View>
  );
}

export default function Onboarding4Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={styles.title}>AI Coach Wynn</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your personal habit coach, powered by AI.{'\n'}Wynn helps you stay on track with smart recommendations.
      </Text>

      {/* Full-screen blur overlay on white background */}
      <BlurView
        intensity={80}
        tint="light"
        style={styles.blurOverlay}
      />

      {/* Animated blob SVG - centered on screen */}
      <View style={styles.svgOverlay}>
        <AnimatedBlobSvg />
      </View>

      {/* Popup card */}
      <View style={styles.popupContainer}>
        <LinearGradient
          colors={['rgba(91,250,159,0.4)', 'rgba(128,255,245,0.4)']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.popupCard}
        >
          <Text style={styles.overlayTitle}>
            Let Wynn Recommend the streak
          </Text>
          <TouchableOpacity style={styles.aiButton}>
            <LinearGradient
              colors={['#0DD3D3', '#4C9F72']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.aiButtonGradient}
            >
              <Text style={styles.aiIcon}>AI</Text>
              <Text style={styles.aiButtonText}>QUESTIONNAIRE</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Pagination */}
      <PaginationDots active={3} total={5} />

      {/* Wave Background */}
      <WaveBackground />

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Onboarding5')}
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 28,
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
    color: '#666666',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 22,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  svgOverlay: {
    position: 'absolute',
    top: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: 2,
  },
  popupContainer: {
    position: 'absolute',
    top: 337,
    left: 20,
    zIndex: 3,
  },
  popupCard: {
    width: 335,
    height: 130,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  overlayTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
    lineHeight: 20,
  },
  aiButton: {
    borderRadius: 40,
    overflow: 'hidden',
    shadowColor: 'rgba(47,183,159,0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 6,
  },
  aiButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: 187,
    height: 50,
    borderRadius: 40,
    gap: 6,
  },
  aiIcon: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'Montserrat_700Bold',
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: 'hidden',
  },
  aiButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Montserrat_600SemiBold',
    textTransform: 'uppercase',
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
