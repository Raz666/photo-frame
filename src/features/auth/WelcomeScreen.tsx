import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../app/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export function WelcomeScreen({ navigation }: Props) {
  const handleStart = () => {
    // TODO: Replace with Google OAuth sign-in and album selection flow.
    navigation.navigate('AlbumPicker');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PhotoFrame</Text>
      <Text style={styles.subtitle}>Your offline-first photo frame.</Text>

      <Pressable style={styles.primaryButton} onPress={handleStart}>
        <Text style={styles.primaryButtonText}>Get Started</Text>
      </Pressable>

      <View style={styles.row}>
        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('Slideshow')}>
          <Text style={styles.secondaryButtonText}>Preview Slideshow</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.secondaryButtonText}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#0d0f12',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#cfd5dc',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: '#3b82f6',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  secondaryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#5b6672',
  },
  secondaryButtonText: {
    color: '#cfd5dc',
    fontWeight: '500',
  },
});
