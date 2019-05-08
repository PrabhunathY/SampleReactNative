/**
 * Login Register compnent
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from '../common';
import { loginStyle } from './style'

class SignInSignUp extends Component {
  constructor(props) {
    super(props);
  }

  onLoginPress = () => {
    Actions.login();
  }
  onRegisterPress = () => {
    Actions.register();
  }

  render() {
    return (
      <View style={loginStyle.containerStyle}>
        <Text style={{ marginTop: 10, marginBottom: 10, marginLeft:10 }}>React Native Sample</Text>
        <Text style={{ marginBottom: 10, marginLeft: 10 }}>This is react native sample</Text>
        <Card>
          <CardSection>
            <Button onPress={this.onLoginPress}>Login</Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.onRegisterPress}>Register</Button>
          </CardSection>
        </Card>
        <Text style={{ marginTop: 25, marginLeft:10 }}>Developer: Prabhunath Yadav</Text>
      </View>
    );
  }
}

export default SignInSignUp;
