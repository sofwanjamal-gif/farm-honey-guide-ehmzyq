
import { Stack } from 'expo-router';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import React from 'react';
import { Platform } from 'react-native';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  const tabs: TabBarItem[] = [
    {
      route: '/(tabs)/(home)',
      label: 'Products',
      icon: 'house.fill',
    },
    {
      route: '/(tabs)/profile',
      label: 'About',
      icon: 'person.fill',
    },
  ];

  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Screen
          name="(home)"
          options={{
            title: 'Products',
            tabBarIcon: ({ color }) => <Icon name="house.fill" color={color} />,
            tabBarLabel: ({ color }) => <Label color={color}>Products</Label>,
          }}
        />
        <NativeTabs.Screen
          name="profile"
          options={{
            title: 'About',
            tabBarIcon: ({ color }) => <Icon name="person.fill" color={color} />,
            tabBarLabel: ({ color }) => <Label color={color}>About</Label>,
          }}
        />
      </NativeTabs>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(home)" />
        <Stack.Screen name="profile" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
