import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid='transparent'
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 16,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 13,
    paddingLeft: 15,
    flex: 1
  },
  containerStyle: {
    height: 65,
    flex: 1,
  }
};

export { Input };
