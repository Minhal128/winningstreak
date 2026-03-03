import React, { useState, useRef } from 'react';
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
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../App';
import WaveBackground from '../components/WaveBackground';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp2'>;

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

export default function ANISHKFFSignup2v2Component({ navigation }: Props) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) {
      value = value[value.length - 1];
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

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
          <ProgressBar step={2} totalSteps={6} />

          {/* Instruction */}
          <Text style={styles.instruction}>
            We have sent the OTP code to your phone number. Please check it out
            and enter below.
          </Text>

          {/* OTP Boxes */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputs.current[index] = ref;
                }}
                style={[
                  styles.otpBox,
                  digit ? styles.otpBoxFilled : styles.otpBoxEmpty,
                ]}
                value={digit}
                onChangeText={(val) => handleChange(val, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
                selectTextOnFocus
              />
            ))}
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignUp3')}
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

          {/* Resend links */}
          <View style={styles.resendContainer}>
            <TouchableOpacity>
              <Text style={styles.didntGetSms}>Didn't get SMS?</Text>
            </TouchableOpacity>
            <Text style={styles.resendText}>Resend OTP in 25 seconds</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Wave background */}
      <WaveBackground />
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
  instruction: {
    fontSize: 14,
    color: '#333333',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 22,
    marginBottom: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    marginBottom: 28,
  },
  otpBox: {
    width: 70,
    height: 70,
    borderRadius: 21,
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'DMSans_700Bold',
  },
  otpBoxEmpty: {
    backgroundColor: '#F6F6F6',
    borderWidth: 2,
    borderColor: '#DDDDDD',
    borderStyle: 'dashed',
  },
  otpBoxFilled: {
    backgroundColor: '#F6F6F6',
    borderWidth: 2,
    borderColor: 'rgba(255,199,39,0.6)',
  },
  continueButtonWrapper: {
    alignSelf: 'center',
    shadowColor: 'rgba(47,183,159,0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 6,
    borderRadius: 40,
    marginBottom: 20,
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
  resendContainer: {
    alignItems: 'center',
    gap: 8,
  },
  didntGetSms: {
    fontSize: 14,
    color: 'rgba(255,199,39,1)',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
  },
  resendText: {
    fontSize: 14,
    color: '#666666',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins_400Regular',
  },
});
