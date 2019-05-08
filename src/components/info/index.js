import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { infoStyle } from './style'

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { containerStyle } = infoStyle;
        return (
            <View style={containerStyle}>
                <Text style={{ marginTop: 10, marginBottom: 10, marginLeft: 10 }}>Tab Information</Text>
                <Text style={{ marginBottom: 10, marginLeft: 10 }}>This is react native sample Information tab screen</Text>
            </View>
        );
    }
}

export default Info;
