import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from '../features/auth';
import { SlideshowScreen } from '../features/slideshow';
import { SettingsScreen } from '../features/settings';
import { AlbumPickerScreen } from '../features/albums';

export type RootStackParamList = {
  Welcome: undefined;
  Slideshow: undefined;
  Settings: undefined;
  AlbumPicker: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }} />
      <Stack.Screen name="AlbumPicker" component={AlbumPickerScreen} options={{ title: 'Pick Album' }} />
      <Stack.Screen name="Slideshow" component={SlideshowScreen} options={{ title: 'Slideshow' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}
