import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { Path, Rect, G, Circle, ClipPath, Defs } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../App';
import WaveBackground from '../components/WaveBackground';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp1'>;

function BackArrow() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
        fill="#333333"
      />
    </Svg>
  );
}

function USFlag() {
  return (
    <Svg width={30} height={20} viewBox="0 0 30 20">
      {/* Stripes */}
      <Rect width="30" height="20" fill="#B22234" rx={2} />
      <Rect y={1.54} width="30" height={1.54} fill="white" />
      <Rect y={4.62} width="30" height={1.54} fill="white" />
      <Rect y={7.69} width="30" height={1.54} fill="white" />
      <Rect y={10.77} width="30" height={1.54} fill="white" />
      <Rect y={13.85} width="30" height={1.54} fill="white" />
      <Rect y={16.92} width="30" height={1.54} fill="white" />
      {/* Blue canton */}
      <Rect width="12" height={10.77} fill="#3C3B6E" />
      {/* Stars (simplified) */}
      <G fill="white">
        <Circle cx={2} cy={1.5} r={0.6} />
        <Circle cx={4} cy={1.5} r={0.6} />
        <Circle cx={6} cy={1.5} r={0.6} />
        <Circle cx={8} cy={1.5} r={0.6} />
        <Circle cx={10} cy={1.5} r={0.6} />
        <Circle cx={3} cy={3} r={0.6} />
        <Circle cx={5} cy={3} r={0.6} />
        <Circle cx={7} cy={3} r={0.6} />
        <Circle cx={9} cy={3} r={0.6} />
        <Circle cx={2} cy={4.5} r={0.6} />
        <Circle cx={4} cy={4.5} r={0.6} />
        <Circle cx={6} cy={4.5} r={0.6} />
        <Circle cx={8} cy={4.5} r={0.6} />
        <Circle cx={10} cy={4.5} r={0.6} />
        <Circle cx={3} cy={6} r={0.6} />
        <Circle cx={5} cy={6} r={0.6} />
        <Circle cx={7} cy={6} r={0.6} />
        <Circle cx={9} cy={6} r={0.6} />
        <Circle cx={2} cy={7.5} r={0.6} />
        <Circle cx={4} cy={7.5} r={0.6} />
        <Circle cx={6} cy={7.5} r={0.6} />
        <Circle cx={8} cy={7.5} r={0.6} />
        <Circle cx={10} cy={7.5} r={0.6} />
        <Circle cx={3} cy={9} r={0.6} />
        <Circle cx={5} cy={9} r={0.6} />
        <Circle cx={7} cy={9} r={0.6} />
        <Circle cx={9} cy={9} r={0.6} />
      </G>
    </Svg>
  );
}

function ChevronDown() {
  return (
    <Svg width={12} height={8} viewBox="0 0 12 8" fill="none">
      <Path
        d="M1.41 0.59L6 5.17L10.59 0.59L12 2L6 8L0 2L1.41 0.59Z"
        fill="#333333"
      />
    </Svg>
  );
}

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

function ProgressBar({ step, totalSteps }: ProgressBarProps) {
  return (
    <View style={progressStyles.container}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <View
          key={i}
          style={[
            progressStyles.segment,
            i < step
              ? progressStyles.activeSegment
              : progressStyles.inactiveSegment,
          ]}
        />
      ))}
    </View>
  );
}

const progressStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 3,
    marginBottom: 84,
  },
  segment: {
    flex: 1,
    height: 4,
    borderRadius: 21,
  },
  activeSegment: {
    backgroundColor: 'rgba(255,199,39,1)',
  },
  inactiveSegment: {
    backgroundColor: '#E0E0E0',
  },
});

export default function ANISHKFFSignup1v2Component({ navigation }: Props) {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          bounces={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <BackArrow />
            </TouchableOpacity>
            <Text style={styles.title}>Sign Up</Text>
          </View>

          {/* Progress Bar */}
          <ProgressBar step={1} totalSteps={6} />

          {/* Label */}
          <Text style={styles.label}>Enter phone number</Text>

          {/* Phone Input */}
          <View style={styles.phoneInputContainer}>
            {/* Country code */}
            <TouchableOpacity style={styles.countryCode}>
              <USFlag />
              <Text style={styles.countryCodeText}>+1</Text>
              <ChevronDown />
            </TouchableOpacity>

            {/* Separator */}
            <View style={styles.separator} />

            {/* Phone number */}
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone number"
              placeholderTextColor="#666666"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignUp2')}
            style={styles.continueButtonWrapper}
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
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Wave background */}
      <WaveBackground />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('SignIn')}
          >
            Sign In
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
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#333333',
    fontFamily: 'Montserrat_700Bold',
  },
  label: {
    fontSize: 15,
    color: '#333333',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 6,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 21,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.33)',
    overflow: 'hidden',
    marginBottom: 20,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 8,
  },
  countryCodeText: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
    fontFamily: 'Poppins_500Medium',
  },
  separator: {
    width: 1,
    height: 28,
    backgroundColor: '#DDDDDD',
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Poppins_400Regular',
  },
  continueButtonWrapper: {
    alignSelf: 'center',
    shadowColor: 'rgba(47,183,159,0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 6,
    borderRadius: 40,
  },
  continueButton: {
    width: 335,
    height: 57,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins_700Bold',
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
