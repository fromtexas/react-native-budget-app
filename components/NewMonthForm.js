import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import uuid from 'uuid/v1';

const SCREEN_WIDTH = Dimensions.get('window').width;
const now = new Date();
const dd = now.getDate();
const mm = now.getMonth()+1;
const yyyy = now.getFullYear();

class NewMonthForm extends Component {
    state = {
        date: ''
    }
    onButtonPress = () => {
        const {date} = this.state;
        const id = uuid();
        this.props.addNew(date, id);
    }
    componentDidMount () {
        this.setState({date: `${yyyy}-${mm}-${dd}`});
    }
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.pickerCont}>
                    <DatePicker
                        style={{flex: 0.4}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate={`${yyyy + 1}-${mm}-${dd}`}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            display: 'none'
                        },
                        dateInput: {
                            height: 65,
                            borderWidth: 0,
                            borderColor: '#fff',
                          },
                        dateTouchBody: {
                            height: 65,
                          },
                        dateText: {
                                color: '#777',
                                fontSize: 18,
                                fontWeight: 'bold'
                        },
                        datePickerCon: {
                            backgroundColor: '#fff',
                            height: 0,
                            overflow: 'visible'
                          }

                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />

                    <Icon
                        raised  
                        onPress={this.onButtonPress} 
                        name='calendar-plus-o'
                        type='font-awesome'
                        color='#f50'
                     />
                </View>
            </View>
        );
    }
}

const styles = {
    container:{
        marginBottom: 10,
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        height: 100
    },
    pickerCont: {
        flexDirection: 'row',
        justifyContent: 'center',

    }
};

export default NewMonthForm;

