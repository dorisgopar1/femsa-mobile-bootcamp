// Before API
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// import type { RootStackParamList } from '../types/navigation'; 

// type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

// const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = () => {
//     if (username === '' || password === '') {
//       setError('Please enter both username and password');
//       return;
//     }
//     console.log('Logging in with', username, password);
//     setError(null); 
//     navigation.navigate('Home');
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//       {error ? <Text>{error}</Text> : null}
//     </View>
//   );
// };

// export default LoginScreen;

import React from 'react';
import { View, Text } from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};

export default LoginScreen;