import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Chart extends Component {
    onButtonPress = () => {
        this.props.navigation.navigate('monthlist');
    }
    render () {
        return (
            <View>
                <Button onPress={this.onButtonPress} title="back"/>
                <Text>
                    i am chart component!
                </Text>
            </View>
        )
    }
}

export default Chart;