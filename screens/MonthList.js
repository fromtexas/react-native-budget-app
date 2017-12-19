import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, View, Button } from 'react-native';
import NewMonthForm from '../components/NewMonthForm';

class MonthList extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    }
    state = {
        newDate: ''
    }
    renderList = () => {
       return this.props.monthes.map((item, id) => <View key={id}>{item.date}</View>);
    }
    onButtonPress = () => {

    }
    getNewDate = (date) => {
        this.setState({newDate: date});
    }
    render () {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.item}>
                    {this.state.newDate}
                </Text>
                <NewMonthForm getNewDate={this.getNewDate}/>
                <Button onPress={this.onButtonPress} title='Add New Month'/>
                {this.renderList()}
            </ScrollView>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        padding: 10
    },
    item: {
        padding: 20,
        textAlign: 'center'
    }
};

const mapStateToProps = ({monthes}) => ({
    monthes
});

export default connect(mapStateToProps)(MonthList);