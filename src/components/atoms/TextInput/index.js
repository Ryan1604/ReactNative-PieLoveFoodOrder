import React from 'react';
import {
  StyleSheet,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';
import {ICSearch} from '../../../assets';

const TextInput = ({placeholder}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9B8FFF"
      />
      <ICSearch style={styles.icon} />
    </TouchableOpacity>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#4A3EAE',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 15,
    width: 350,
  },
  icon: {
    marginLeft: -40,
    marginTop: 20,
    width: 20,
    height: 20,
  },
});
