import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../App';
import WaveBackground from '../components/WaveBackground';
import Logo from '../components/Logo';

const { width } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function MailIcon() {
  return (
    <Svg width={20} height={16} viewBox="0 0 20 16" fill="none">
      <Path
        d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}

function GoogleIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 48 48">
      <Path
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        fill="#FFC107"
      />
      <Path
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        fill="#FF3D00"
      />
      <Path
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        fill="#4CAF50"
      />
      <Path
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        fill="#1976D2"
      />
    </Svg>
  );
}

function AppleIcon() {
  return (
    <Svg width={18} height={22} viewBox="0 0 18 22" fill="none">
      <Path
        d="M14.94 11.566c-.03-3.09 2.52-4.572 2.634-4.644-1.434-2.1-3.666-2.388-4.464-2.418-1.896-.192-3.708 1.116-4.674 1.116-.966 0-2.46-1.092-4.044-1.062C2.502 4.588.702 5.746.024 7.546c-1.392 2.406-.354 5.97.996 7.926.666.96 1.458 2.04 2.496 2.004 1.002-.042 1.38-.648 2.592-.648 1.212 0 1.554.648 2.616.624 1.08-.018 1.764-.978 2.424-1.944.762-1.116 1.08-2.196 1.098-2.25-.024-.012-2.106-.81-2.13-3.21l-.006-.006-.162-.48.006.006-.006-.003z"
        fill="#333333"
      />
      <Path
        d="M12.252 3.006c.552-.672.924-1.602.822-2.532-.798.03-1.758.534-2.328 1.194-.51.594-.96 1.542-.84 2.454.888.066 1.794-.45 2.346-1.116z"
        fill="#333333"
      />
    </Svg>
  );
}

export default function ANISHKFFLoginv4Component({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Content */}
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Logo size={60} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Select option to login</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {/* Email/Phone/Username Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            activeOpacity={0.8}
            style={styles.primaryButtonWrapper}
          >
            <LinearGradient
              colors={['#88BA83', '#1A5540']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.primaryButton}
            >
              <View style={styles.buttonIcon}>
                <MailIcon />
              </View>
              <Text style={styles.primaryButtonText}>Email/Phone/Username</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Google Button */}
          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
            <View style={styles.buttonIcon}>
              <GoogleIcon />
            </View>
            <Text style={styles.secondaryButtonText}>Google Account</Text>
          </TouchableOpacity>

          {/* Apple Button */}
          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
            <View style={styles.buttonIcon}>
              <AppleIcon />
            </View>
            <Text style={styles.secondaryButtonText}>Apple Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Wave background */}
      <WaveBackground />

      {/* Footer link on top of waves */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have account yet?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('SignUp1')}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#333333',
    fontFamily: 'DMSans_700Bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#333333',
    fontFamily: 'Poppins_400Regular',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 16,
    alignItems: 'center',
  },
  primaryButtonWrapper: {
    shadowColor: 'rgba(47,183,159,0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 6,
    borderRadius: 20,
    alignSelf: 'center',
  },
  primaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 72,
    borderRadius: 20,
    paddingHorizontal: 20,
    gap: 6,
  },
  secondaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 72,
    backgroundColor: '#F6F6F6',
    borderRadius: 21,
    paddingHorizontal: 20,
    gap: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    letterSpacing: -0.24,
  },
  secondaryButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    letterSpacing: -0.24,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  footerText: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Poppins_400Regular',
  },
  footerLink: {
    color: '#FFFFFF',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
