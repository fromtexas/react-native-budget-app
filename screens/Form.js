import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, TextInput, Switch, Animated } from 'react-native';
import { FormLabel, FormValidationMessage, Button, Icon } from 'react-native-elements';
import uuid from 'uuid/v1';
import {addNewLineinMonthBudget} from '../actions/monthActions';
import BackBtn from '../components/BackBtn';

class Form extends Component {
    state = {
        switch: new Animated.ValueXY(0,0),
        text: '',
        $: '',
        or: true,
        warning: ''
    }
    onSwitch = () => {
        const {or} = this.state;

        Animated.spring(this.state.switch, {
            toValue: {
              x: or ? 80 : 0,
              y: 0
            }
        }).start();

        this.setState({or: !or});
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
    back = () => {
        const {item} = this.props.navigation.state.params;
        this.props.navigation.navigate('month', {item});
    }
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrap}>
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='Some product name'
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                </View>
                <View style={styles.inputWrap}>
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder={this.state.warning || 'Only numbers'}
                    style={styles.input}
                    onChangeText={this.isNumber}
                    value={this.state.$}
                />
                </View>

                <View style={styles.buttonsRow}>
                    <View style={styles.swithContainer}>
                        <Animated.View style={this.state.switch.getLayout()}>
                        <Icon 
                            size={30}
                            containerStyle={styles.iconSwitch}
                            name={this.state.or ? 'plus' : 'minus'}
                            type='font-awesome'
                            color='#fff'
                            onPress={this.onSwitch}
                        />
                        </Animated.View>
                    </View>
                    <Icon
                        size={30}
                        containerStyle={styles.iconSwitch}
                        name='check'
                        type='font-awesome'
                        color='#fff'
                        onPress={this.onButtonPress} 
                    />
                    <BackBtn style={{marginLeft: 10}} back={this.back}/>
                </View>
            
            </View>
        )
    }
}

const styles = {
    container:{
        paddingTop: 20
    },
    input: {
        height: 50,
        fontSize: 18
        
    },
    inputWrap: {
        height: 80,
        backgroundColor: '#f1f1f1',
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        marginBottom: 20
    },
    iconSwitch: {
        borderRadius: 50,
        height: 80,
        width: 80,
        backgroundColor: '#ff6666', 
    },
    swithContainer: {
        borderRadius: 50,
        height: 80,
        width: 160,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
        overflow: 'visible',
        marginRight: 10
    },
    buttonsRow: {
        flexDirection: 'row'
    }
}

export default connect()(Form);