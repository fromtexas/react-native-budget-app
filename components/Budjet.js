import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MonthItemRound from '../components/MonthItemRound';

export default ({month, removeItem}) => {
    let incomes = [];
    let costs = [];

    month.budget.forEach(item => {
        if (item.or) {
            incomes.push(<MonthItemRound key={item.id}  monthId={month.id} removeItem={removeItem} {...item} />);
        } else {
            costs.push(<MonthItemRound key={item.id}  monthId={month.id} removeItem={removeItem} {...item} />);
        } 
    });

    return (
        <View style={styles.container}>
                {incomes.length ? <Text style={{fontSize: 20, color: '#777', marginLeft: 50, fontWeight: 'bold', marginBottom: 10}}>Incomes:</Text> : null} 
                {incomes}
                {costs.length ? <Text style={{fontSize: 20, color: '#777', marginLeft: 50, fontWeight: 'bold', marginBottom: 10}}>Costs:</Text> : null} 
                {costs}
        </View>
    );
}

const styles = {
    container: {
        marginBottom: 50
    }
};