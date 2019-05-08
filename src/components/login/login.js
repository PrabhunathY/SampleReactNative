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

class Login extends Component {
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
    const { name, password } = this.state;
    let userName = '';
    let birthYear = '';
    if ((name && name.toString().toLowerCase() == 'test') && password == '12345') {
      userName = 'Luke Skywalker'; // People API user name to filter an to verify data;
      birthYear = '19BBY'// this data is available in the people API: https://swapi.co/api/people/
    }
    const person = this.props.people.filter(items => items.name === userName && items.birth_year === birthYear);
    if (person && person.length) {
      this.props.setLoginUser(person[0]);
      Actions.dasboard({ type: ActionConst.RESET });
    } else {
      Alert.alert(ALERT_TITLE, PEOPLE_API_ERROR,
        [
          { text: OK, onPress: () => this.onPressOK(), style: 'cancel' },
        ],
        { cancelable: false },
      );
    }
  }

  onPressOK = () => {
    console.log('onPressOK pressed');
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress}>Login</Button>
    );
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

          <Text style={loginStyle.errorTextStyle}>
            {this.props.message}
          </Text>

          <CardSection>
            {this.renderButton()}
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

export default connect(mapStateToProps, { getPeople, setLoginUser })(Login);
