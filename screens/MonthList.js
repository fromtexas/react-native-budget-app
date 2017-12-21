import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, View, Button } from 'react-native';
import NewMonthForm from '../components/NewMonthForm';
import {addMonth, removeMonth} from '../actions/monthActions';

class MonthList extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    }

    onButtonPress = (item) => {
        if(item.budget.length){
            return () => this.props.navigation.navigate('month', {item});
        }
        return () => this.props.navigation.navigate('form', {item});
    }

    removeMonth = (id) => {
        return () => {
            this.props.removeMonth(id);
        };
    }
    
    renderList = () => {
       return this.props.monthes.map(item => {
           return (
                <View style={styles.button} key={item.id}>
                <Button onPress={this.onButtonPress(item)} title={item.date}/>
                <Button onPress={this.removeMonth(item.id)} title='Remove'/>
                </View>
           );
       });
    }
    
    render () {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.item}>
                    Monthes List
                </Text>
                <NewMonthForm  addNew = {this.props.addMonth}/>
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
    },
    button: {
        marginBottom: 10
    }
};

const mapStateToProps = ({monthes}) => ({
    monthes
});


export default connect(mapStateToProps, {addMonth, removeMonth})(MonthList);