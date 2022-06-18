import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ClickerButton(props) {
  return (
    <TouchableOpacity style={[props.variant==="reset" ? styles.resetButton : styles.lightButton, styles.button]} onPress={props.press} >
      <Text style={[props.variant==="reset" ? {color:'white'} : {color:'white'}, styles.buttonText]} >{props.title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center'
  },
  lightButton: {
    backgroundColor: 'red',
  },
  resetButton: {
    backgroundColor: '#EEE9E9',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
  }
});
