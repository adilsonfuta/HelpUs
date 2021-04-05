import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { Text, View } from 'react-native';
import Routes from "./src/routes";
export default function App() {
  return (
    <Routes></Routes>
  );
}

=======
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> f1a1004ec65d75ba677b923e43b6e54dd434dfa2
