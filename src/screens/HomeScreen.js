// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { firebase } from '../firebaseConfig';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => navigation.navigate('Login'))
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenido!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
