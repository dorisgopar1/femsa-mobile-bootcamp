import { ParamListBase } from '@react-navigation/native';

export type AuthNavigatorParamList = {
  Login: undefined;
  Register: undefined;
};

export type AppNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type HomeNavigatorParamList = {
  Feed: undefined;
  Search: undefined;
  Notifications: undefined;
  Home: undefined;
  Details: { itemId: string };
};

export type FeedStackParamList = {
  Feed: undefined;
  Details: { itemId: string };
};

export type SearchStackParamList = {
  Search: undefined;
  Details: { itemId: string };
};