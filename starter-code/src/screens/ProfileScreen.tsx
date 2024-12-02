// Before API
// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// import type { RootStackParamList } from '../types/navigation';

// type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

// const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Welcome to the Profile Screen</Text>
      
//       <Button
//         title="Log Out"
//         onPress={() => {
//           console.log('Logging out...');
//           navigation.navigate('Login');
//         }}
//       />
//     </View>
//   );
// };

// export default ProfileScreen;

import React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
