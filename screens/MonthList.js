import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MonthList extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    }
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.item}>
                    i am monthList component!
                </Text>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    item: {
        padding: 20,
        textAlign: 'center'
    }
};

export default MonthList;