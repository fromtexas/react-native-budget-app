import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, TextInput, Switch, Button } from 'react-native';

class Form extends Component {
    state = {
        text: '',
        $: '',
        or: true
    }
    onButtonPress = () => {
        console.log('h');
        
    }
    render () {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Some product name'
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <TextInput
                    placeholder='Prise in numbers'
                    style={styles.input}
                    onChangeText={($) => this.setState({$})}
                    value={this.state.$}
                />
                <Switch
                    style={styles.input}
                    value={this.state.or}
                    onValueChange={() => this.setState({or: !this.state.or})}
                />
                <Button onPress={this.onButtonPress} title='Submit' />
            </View>
        )
    }
}

const styles = {
    container: {
        padding: 10
    },
    input: {
        height: 50,
        marginBottom: 20
    }
}

export default Form;