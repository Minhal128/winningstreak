import React, { useState, useMemo } from 'react';
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
import Svg, { Path, Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../App';
import WaveBackground from '../components/WaveBackground';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp6'>;

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

function CheckIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="12" fill="#2B8A3E" />
      <Path
        d="M9.5 15.5L6 12L7.41 10.59L9.5 12.67L16.09 6.09L17.5 7.5L9.5 15.5Z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}

function ProgressBar({ step, totalSteps }: { step: number; totalSteps: number }) {
  return (
    <View style={progressStyles.container}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <View
          key={i}
          style={[
            progressStyles.segment,
            i < step ? progressStyles.activeSegment : progressStyles.inactiveSegment,
          ]}
        />
      ))}
    </View>
  );
}

const progressStyles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 3, marginBottom: 84 },
  segment: { flex: 1, height: 4, borderRadius: 21 },
  activeSegment: { backgroundColor: 'rgba(255,199,39,1)' },
  inactiveSegment: { backgroundColor: '#E0E0E0' },
});

function getPasswordStrength(password: string): {
  label: string;
  color: string;
} {
  if (password.length === 0) return { label: '', color: 'transparent' };
  if (password.length < 6) return { label: 'Weak Password', color: '#E53935' };
  if (password.length < 8) return { label: 'Medium Password', color: '#FB8C00' };
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
  if (score >= 3 && password.length >= 8)
    return { label: 'Very Strong Password', color: '#2B8A3E' };
  if (score >= 2) return { label: 'Strong Password', color: '#43A047' };
  return { label: 'Medium Password', color: '#FB8C00' };
}

export default function ANISHKFFSignup6v2Component({ navigation }: Props) {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const strength = useMemo(() => getPasswordStrength(password), [password]);

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
          <ProgressBar step={6} totalSteps={6} />

          {/* Create Password */}
          <Text style={styles.label}>Create a password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#666666"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          {/* Password Strength */}
          {strength.label !== '' && (
            <View style={styles.strengthRow}>
              <CheckIcon />
              <Text style={[styles.strengthText, { color: strength.color }]}>
                {strength.label}
              </Text>
            </View>
          )}

          {/* Repeat Password */}
          <Text style={styles.label}>Repeat password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#666666"
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.continueButtonWrapper}
            onPress={() => navigation.navigate('Onboarding1')}
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
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 21,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Poppins_400Regular',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.33)',
  },
  strengthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
    alignSelf: 'flex-end',
  },
  strengthText: {
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
  },
  continueButtonWrapper: {
    alignSelf: 'center',
    marginTop: 10,
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
