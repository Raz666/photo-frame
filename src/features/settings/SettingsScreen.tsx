import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../app/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export function SettingsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Preferences and cache options will appear here.</Text>

      {/* TODO: Add setting controls and persistence. */}

      <Pressable style={styles.button} onPress={() => navigation.navigate('Slideshow')}>
        <Text style={styles.buttonText}>Back to Slideshow</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#0f1115',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#cfd5dc',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4b5563',
  },
  buttonText: {
    color: '#cfd5dc',
    fontWeight: '500',
  },
});
