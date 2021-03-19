import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Name from './components/Name';
import Food from './components/Food';

export default function App() {
  return (
    <View style={Styles.container}>
        <Name/>
    </View>
  )


 return (
    <View style={Styles.container}>
        <Food/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


