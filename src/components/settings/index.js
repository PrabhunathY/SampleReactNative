import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { infoStyle } from './style'

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { containerStyle } = infoStyle;
        return (
            <View style={containerStyle}>
                <Text style={{ marginTop: 10, marginBottom: 10, marginLeft: 10 }}>Tab Settings</Text>
                <Text style={{ marginBottom: 10, marginLeft: 10 }}>This is react native sample Settings tab screen</Text>
            </View>
        );
    }
}

export default Settings;
