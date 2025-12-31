import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../app/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'AlbumPicker'>;

export function AlbumPickerScreen({ navigation }: Props) {
  const handlePickAlbum = () => {
    // TODO: Fetch albums from Google Photos and persist selection.
    navigation.navigate('Slideshow');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Album Picker</Text>
      <Text style={styles.subtitle}>Choose a Google Photos album to cache.</Text>

      <Pressable style={styles.primaryButton} onPress={handlePickAlbum}>
        <Text style={styles.primaryButtonText}>Select Sample Album</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.secondaryButtonText}>Back to Welcome</Text>
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
    backgroundColor: '#101217',
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
  primaryButton: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: '#22c55e',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#0a0a0a',
    fontWeight: '700',
  },
  secondaryButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4b5563',
  },
  secondaryButtonText: {
    color: '#cfd5dc',
    fontWeight: '500',
  },
});
