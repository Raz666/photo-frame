import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../app/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Slideshow'>;

export function SlideshowScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slideshow</Text>
      <Text style={styles.subtitle}>Offline playback will appear here.</Text>

      {/* TODO: Render cached images, timing, and transitions. */}

      <View style={styles.row}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('AlbumPicker')}>
          <Text style={styles.buttonText}>Pick Album</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
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
    backgroundColor: '#101318',
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
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    paddingHorizontal: 16,
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
