import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigatorParamList } from '../types/navigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<HomeNavigatorParamList>();

const FeedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={FeedScreen} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} />
  </Stack.Navigator>
);

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
