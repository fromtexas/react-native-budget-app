import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, TextInput, Switch, Button } from 'react-native';
import uuid from 'uuid/v1';
import {addNewLineinMonthBudget} from '../actions/monthActions';

class Form extends Component {
    state = {
        text: '',
        $: '',
        or: true,
        warning: ''
    }
    onButtonPress = () => {
        if(!this.state.text || !this.state.$){
            return this.setState({warning: 'Both fields are requered!'})
        }
        const payload = {
            id: uuid(),
            text: this.state.text,
            $: this.state.$,
            or: this.state.or
        };
        const id = this.props.navigation.state.params.item.id;
        this.props.dispatch(addNewLineinMonthBudget(id, payload));
        this.setState({
            text: '',
            $: ''
        });
    }
    isNumber = ($) => {

        if(isNaN($)){
            return this.setState({warning: 'This input accept only numbers!'});
        }
        this.setState({
            $
        });
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
                    placeholder={this.state.warning || 'Numbers'}
                    style={styles.input}
                    onChangeText={this.isNumber}
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

export default connect()(Form);