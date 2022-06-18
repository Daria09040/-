import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Clicker from './components/clicker';

export default function App() {
  const [count, useCount] = useState(0);
  function showMessage() {
    var message = "счетчик";
    return message;
  }
  return (
    <TouchableWithoutFeedback onPress={ () => useCount(count+1) }>
      <View style={styles.container}>
        <Text style={styles.counter}>{count}</Text>
        <Clicker press={ () => useCount(count+1) } title="+1" />
        <Text style={styles.message}>{showMessage()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 100,
    textAlign: 'center',
  },
});
