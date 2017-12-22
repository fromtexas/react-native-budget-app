import React, { Component } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import {removeMonthBudgetItem} from '../actions/monthActions';


class Month extends Component {

    removeItem = (id, itemId) => {
        return () => {
            this.props.removeMonthBudgetItem(id, itemId);
        }  
    }

    addMore = () => {
        const item = this.props.navigation.state.params.item;
        this.props.navigation.navigate('form', {item});
    }

    renderBudget () {
        //shitty! require refactoring with find!
        const month = this.props.monthes.find(item => item.id === this.props.navigation.state.params.item.id);
        if(!month){
            return <Text>There is no month u are loooking for!GTFO</Text>
        }
        return month.budget.map(item => {
            return (
            <View key ={item.id} >
                <Text>{item.text}</Text>
                <Text>{item.$}</Text>
                <Button onPress={this.removeItem(month.id, item.id)} title='Remove'/>
            </View>
            );
        });
    }
    render () {    
        return (
            <ScrollView>
                {this.renderBudget()}
                <Button onPress={this.addMore} title='Add more' /> 
            </ScrollView>
        )
    }
}

const mapStateToProps = ({monthes}) => ({
    monthes
});

export default connect(mapStateToProps, {removeMonthBudgetItem})(Month);