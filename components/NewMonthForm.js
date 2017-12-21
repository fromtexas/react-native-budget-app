import React, { Component } from 'react';
import { Text, View, Button, Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker';
import uuid from 'uuid/v1';

const SCREEN_WIDTH = Dimensions.get('window').width - 20;
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
                <DatePicker
                    style={{width: SCREEN_WIDTH}}
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
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                <Button onPress={this.onButtonPress} title='Add New Month'/>
            </View>
        );
    }
}

const styles = {
    container:{
        marginBottom: 10
    }
};

export default NewMonthForm;

