import React, { Component } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { planetDetailsAction } from '../../actions/PlanetDetailsActions';
import { Card, CardSection, Spinner } from '../common';
import { planetStyle, itemStyle } from './style'

class PlanetDetails extends Component {

    componentDidMount() {
        if (this.props.item && this.props.item.url)
            this.props.planetDetailsAction(this.props.item.url);
    }

    render() {
        const { containerStyle, titleText, baseText, loginText } = planetStyle;
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        const { name, gravity, diameter, rotation_period, surface_water, terrain } = this.props.planetDetails;
        return (<View style={containerStyle}>
            <Text style={loginText}>SignIn : {this.props.loginUser.name}</Text>
            <Card>
                <CardSection>
                    <Text style={titleText}>{name}</Text>
                </CardSection>
                <Text style={baseText}>Grevity: {gravity}</Text>
                <Text style={baseText}>Diameter: {diameter}</Text>
                <Text style={baseText}>Rotation: {rotation_period}</Text>
                <Text style={baseText}>Surface Water: {surface_water}</Text>
                <Text style={baseText}>Terrain: {terrain}</Text>
            </Card>
        </View>);
    }
}

const mapStateToProps = state => ({
    planetDetails: state.planetDetails.data || {},
    loading: state.planetDetails.loading,
    loginUser: state.login.loginUser,
});

export default connect(mapStateToProps, { planetDetailsAction })(PlanetDetails);
