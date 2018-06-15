import React from 'react';
import {View, TextInput} from 'react-native';

export default ({onChangeText, value, placeholder}) => {
    return (
        <View style={styles.inputWrap}>
        <TextInput
            underlineColorAndroid='transparent'
            placeholder={placeholder}
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
        />
        </View>
    );
}

const styles = {
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
    }
};
