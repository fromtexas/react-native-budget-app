import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, TextInput, Switch,  } from 'react-native';
import { FormLabel, FormValidationMessage, Button } from 'react-native-elements';
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
                <FormLabel>Product Name</FormLabel>
                <TextInput
                    placeholder='Some product name'
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <FormLabel>Price</FormLabel>
                <TextInput
                    placeholder={this.state.warning || 'Only numbers'}
                    style={styles.input}
                    onChangeText={this.isNumber}
                    value={this.state.$}
                />
                <FormValidationMessage>{this.state.warning}</FormValidationMessage>
                <FormLabel labelStyle={{textAlign: 'right'}}>+-</FormLabel>
                <Switch
                    thumbTintColor='red'
                    onTintColor='red'
                    style={styles.input}
                    value={this.state.or}
                    onValueChange={() => this.setState({or: !this.state.or})}
                />
                <Button 
                    large
                    buttonStyle={{backgroundColor: 'red', borderRadius: 50}}
                    onPress={this.onButtonPress} title='Submit'
                />
            </View>
        )
    }
}

const styles = {
    container:{
        padding: 20
    },
    input: {
        height: 50,
        marginBottom: 20
    }
}

export default connect()(Form);