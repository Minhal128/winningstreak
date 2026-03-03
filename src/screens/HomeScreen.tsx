import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import WaveBackground from '../components/WaveBackground';
import Logo from '../components/Logo';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.content}>
        <Logo size={60} />
        <Text style={styles.title}>Your Winning Streak</Text>
        <Text style={styles.subtitle}>Welcome back! Ready to crush your goals?</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => {/* Add streak logic */}}
        >
          <Text style={styles.addButtonText}>+ New Streak</Text>
        </TouchableOpacity>
      </View>

      <WaveBackground />
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
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F5F4E',
    fontFamily: 'Montserrat_700Bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    fontFamily: 'Poppins_400Regular',
    marginTop: 10,
    textAlign: 'center',
  },
  statsContainer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
  statCard: {
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  statValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#1F5F4E',
    fontFamily: 'Montserrat_700Bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#666666',
    fontFamily: 'Poppins_500Medium',
  },
  addButton: {
    position: 'absolute',
    bottom: 120,
    backgroundColor: '#1F5F4E',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins_700Bold',
  },
});
