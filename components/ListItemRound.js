import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {View, TouchableHighlight, Text} from 'react-native';
import { LinearGradient } from 'expo';
import {counts} from '../utils';
import { Font } from 'expo';

class ListItemRound extends Component {
    state = {
        fontLoaded: false
    }
    async componentDidMount() {
        await Font.loadAsync({
          'lato-reg': require('../assets/fonts/Lato-Regular.ttf'),
          'lato-light': require('../assets/fonts/Lato-Light.ttf'),
        });
    
        this.setState({ fontLoaded: true });
      }
    render () {
        const renderText = () => {
           if (this.state.fontLoaded){
               return (
                <View>
                    <Text style={{ fontFamily: 'lato-reg', fontSize: 18 }}>jan, 2003</Text>
                    <Text style={{ fontFamily: 'lato-reg', fontSize: 16 }}>+ 1000</Text>
                    <Text style={{ fontFamily: 'lato-light', fontSize: 16 }}>+ 1000</Text>
                </View>
               );
            } 
        };
        return(
            <View style={styles.container}>
                <Icon
                    containerStyle={styles.iconLeft}
                    name='plus'
                    type='font-awesome'
                    color='#fff'
                    onPress={() => console.log('F')}
                />
                
                    {renderText()}     
                
                <Icon
                    containerStyle={styles.iconRight}
                    name='plus'
                    type='font-awesome'
                    color='#fff'
                    onPress={() => console.log('F')}
                />
            </View>
        );
    }
}

const styles = {
   container: {
       borderRadius: 50,
       backgroundColor: 'red',
       flexDirection: 'row',
       justifyContent: 'space-between',
       position: 'relative',
       height: 80,
   },
   iconLeft: {
    borderRadius: 50,
    width: 80,
    backgroundColor: '#f1f1f1',
    left: -1
   },
   iconRight: {
    borderRadius: 50,
    width: 80,
    backgroundColor: '#f1f1f1',
    right: -1
   }
};

export default ListItemRound;