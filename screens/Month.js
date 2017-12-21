import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {connect} from 'react-redux';
import {removeMonthBudgetItem} from '../actions/monthActions';


class Month extends Component {

    removeItem = (id, itemId) => {
        return () => {
            this.props.removeMonthBudgetItem(id, itemId);
        }  
    }

    renderBudget () {
        //shitty! require refactoring with find!
        const month = this.props.monthes.find(item => item.id === this.props.navigation.state.params.item.id);

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
            <View>
                {this.renderBudget()}
            </View>
        )
    }
}

const mapStateToProps = ({monthes}) => ({
    monthes
});

export default connect(mapStateToProps, {removeMonthBudgetItem})(Month);