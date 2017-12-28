import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {
    View, 
    Animated,
    } from 'react-native';

export default class AddNewMonthBtn extends Component{
    state = {
        scale: new Animated.Value(1)
    }
    addMonth = () => {
        Animated.spring(this.state.scale, {
            toValue: 1.2,
            duration: 500,
        }).start();

    }
    render () {
        return (
        <Animated.View style={[{transform: [{scale: this.state.scale}]}, styles.animatedCon]}>
            <Icon
                size={30}
                containerStyle={[styles.iconAddBtn]}
                name='calendar-plus-o'
                type='font-awesome'
                color='#fff'
                onPress={this.addMonth}
            />
        </Animated.View>
        );
    }
}

const styles = {
    iconAddBtn:{
        zIndex: 100,
        position: 'absolute',
        borderRadius: 50,
        height: 80,
        width: 80,
        backgroundColor: '#ff9999',
    },
    animatedCon: {
        position: 'absolute',
        bottom: 10,
        right: 0,
        height: 80,
        width: 80,
        borderRadius: 50,
    }
};