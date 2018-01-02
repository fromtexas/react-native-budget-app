import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {
    View, 
    Animated,
    Text,
    Dimensions
    } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class AddNewMonthBtn extends Component{
    state = {
        width: new Animated.Value(70),
        height: new Animated.Value(70),
        visible: false
    }
    renderMonths = () => {
        return MONTHS.map(item => <Text onPress={this.add} style={styles.text} key={item}>{item.toUpperCase()}</Text>);
    }
    add = () => {
        console.log('yeah');
    }
    addMonth = () => {
        const {visible} = this.state;

        Animated.sequence([
            Animated.spring(this.state.width, {
                toValue: visible ? 70: SCREEN_WIDTH,
                duration: 300,
            }),
            Animated.timing(this.state.height, {
                toValue: visible ? 70 : SCREEN_HEIGHT,
                duration: 300,
            })
        ]).start();

        this.setState({visible: !visible});
    }
    render () {
        return (
        <Animated.View style={[styles.menuScale, {width: this.state.width, height: this.state.height}]}>
            <Animated.View style={[styles.menuMonths, {display: this.state.visible ? 'flex' : 'none'}]}>
                {this.renderMonths()}
            </Animated.View>
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
        zIndex: 102,
        position: 'absolute',
        height: 70,
        width: 70,
        bottom: 0,
        right: 0,
        backgroundColor: '#ff9999',
    },
    menuMonths: {
        zIndex: 101,
        flex: 1,
        justifyContent: 'center',
    },
    menuScale: {
        zIndex: 99,
        backgroundColor: '#ff9999',
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 70,
        width: 70,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 30
    }
  
};