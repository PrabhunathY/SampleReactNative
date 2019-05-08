import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CardSection, Card } from '../common';


const Item = (props) => {
  const { titleStyle, descStyle } = props.style;
  return (
    <Card>
      <TouchableOpacity onPress={props.onPressItem}>
        <CardSection>
          <View>
            <Text style={titleStyle}>{props.data.name}</Text>
            <Text style={descStyle}>{props.data.terrain}</Text>
          </View>
        </CardSection>
      </TouchableOpacity>
    </Card>
  );
};

export { Item };
