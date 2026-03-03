import React, { useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import ANISHKFFSplashv4Component from './src/screens/ANISHKFFSplashv4Component';
import ANISHKFFLoginv4Component from './src/screens/ANISHKFFLoginv4Component';
import ANISHKFFSignInv2Component from './src/screens/ANISHKFFSignInv2Component';
import ANISHKFFSignup1v2Component from './src/screens/ANISHKFFSignup1v2Component';
import ANISHKFFSignup2v2Component from './src/screens/ANISHKFFSignup2v2Component';
import ANISHKFFSignup3v2Component from './src/screens/ANISHKFFSignup3v2Component';
import ANISHKFFSignup4v2Component from './src/screens/ANISHKFFSignup4v2Component';
import ANISHKFFSignup5v2Component from './src/screens/ANISHKFFSignup5v2Component';
import ANISHKFFSignup6v2Component from './src/screens/ANISHKFFSignup6v2Component';
import Onboarding1Screen from './src/screens/Onboarding1Screen';
import Onboarding2Screen from './src/screens/Onboarding2Screen';
import Onboarding3Screen from './src/screens/Onboarding3Screen';
import Onboarding4Screen from './src/screens/Onboarding4Screen';
import Onboarding5Screen from './src/screens/Onboarding5Screen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignIn: undefined;
  SignUp1: undefined;
  SignUp2: undefined;
  SignUp3: undefined;
  SignUp4: undefined;
  SignUp5: undefined;
  SignUp6: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Onboarding4: undefined;
  Onboarding5: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#1F5F4E" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={ANISHKFFSplashv4Component} />
          <Stack.Screen name="Login" component={ANISHKFFLoginv4Component} />
          <Stack.Screen name="SignIn" component={ANISHKFFSignInv2Component} />
          <Stack.Screen name="SignUp1" component={ANISHKFFSignup1v2Component} />
          <Stack.Screen name="SignUp2" component={ANISHKFFSignup2v2Component} />
          <Stack.Screen name="SignUp3" component={ANISHKFFSignup3v2Component} />
          <Stack.Screen name="SignUp4" component={ANISHKFFSignup4v2Component} />
          <Stack.Screen name="SignUp5" component={ANISHKFFSignup5v2Component} />
          <Stack.Screen name="SignUp6" component={ANISHKFFSignup6v2Component} />
          <Stack.Screen name="Onboarding1" component={Onboarding1Screen} />
          <Stack.Screen name="Onboarding2" component={Onboarding2Screen} />
          <Stack.Screen name="Onboarding3" component={Onboarding3Screen} />
          <Stack.Screen name="Onboarding4" component={Onboarding4Screen} />
          <Stack.Screen name="Onboarding5" component={Onboarding5Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
