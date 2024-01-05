import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const UIButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C51333',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.OS === 'ios' ? width * 0.8 : width * 0.8, // Adjust width for iOS and Android
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UIButton;
