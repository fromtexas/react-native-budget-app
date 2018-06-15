import React, {PureComponent} from 'react';
import {View, Animated} from 'react-native';
import {Icon} from 'react-native-elements';

export default class Switch extends PureComponent {
    state = {
        switch: new Animated.ValueXY(0,0)
    }
    onSwitch = () => {

        Animated.spring(this.state.switch, {
            toValue: {
              x: this.props.or ? 80 : 0,
              y: 0
            }
        }).start();

        this.props.change();
    }
    render () {
        return (
            <View style={styles.swithContainer}>
                <Animated.View style={this.state.switch.getLayout()}>
                <Icon 
                    size={30}
                    containerStyle={styles.iconSwitch}
                    name={this.props.or ? 'plus' : 'minus'}
                    type='font-awesome'
                    color='#fff'
                    onPress={this.onSwitch}
                />
                </Animated.View>
            </View>
        );
    }
}

const styles = {
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
    }
};