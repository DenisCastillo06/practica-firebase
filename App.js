import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from './firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

// App.js


const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <View style={{ padding: 20 }}>
      {user ? (
        <Text>Bienvenido {user.email}</Text>
      ) : (
        <>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
          />
          <Button title="Sign Up" onPress={handleSignUp} />
          <Button title="Login" onPress={handleLogin} />
          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        </>
      )}
    </View>
  );

