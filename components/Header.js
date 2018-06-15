import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

export default class Header extends PureComponent {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        height: 75,
        elevation: 3,
        justifyContent: 'center',
        backgroundColor: '#fdfdfd',
        marginBottom: 25,
    },
    text: {
        paddingLeft: 50,
        color: '#777',
        fontSize: 22,
        fontWeight: 'bold'
    }
};