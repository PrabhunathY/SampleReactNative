/**
 * People compnent to login with name and birth year
 */
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { getPeople, setLoginUser } from '../../actions/LoginActions';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { loginStyle } from './style'
import {
  NAME,
  PASSWORD,
  H_NAME,
  H_PASSWORD,
  PEOPLE_API_ERROR,
  ALERT_TITLE,
  OK,
} from '../../value/strings';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentWillMount');
    this.props.getPeople();
  }

  onButtonPress = () => {
    Actions.dasboard({ type: ActionConst.RESET });
  }

  render() {
    return (
      <View style={loginStyle.containerStyle}>
        <Card>
          <CardSection>
            <Input
              label={NAME}
              placeholder={H_NAME}
              value={this.state.name}
              onChangeText={text => this.setState({ name: text })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label={PASSWORD}
              placeholder={H_PASSWORD}
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
          </CardSection>

          <CardSection>
          <Button onPress={this.onButtonPress}>Register</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ login }) => {
  const { people, message, loading } = login;
  return { people, message, loading };
};

export default connect(mapStateToProps, { getPeople, setLoginUser })(Register);
