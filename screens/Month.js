import React, { Component } from 'react';
import {View, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import {removeMonthBudgetItem} from '../actions/monthActions';
import MonthItem from '../components/MonthItem';


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
        if(!this.props.navigation.state.params){
             return <Text>There is no month u are loooking for!GTFO</Text>
        }
        const month = this.props.monthes.find(item => item.id === this.props.navigation.state.params.item.id);
        if(!month){
            return <Text>There is no month u are loooking for!GTFO</Text>
        }
        return month.budget.map(item => {
            return (
                <MonthItem key={item.id}  monthId={month.id} removeItem={this.removeItem} {...item} />
            );
        });
    }
    render () {    
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.renderBudget()}
                </View>
                
                <Button 
                    large
                    buttonStyle={{backgroundColor: '#ff6666', borderRadius: 50, marginBottom: 20}}
                    onPress={this.addMore} 
                    title='Add more' 
                /> 
            </ScrollView>
        )
    }
}

const styles = {
    container: {
        marginBottom: 50
    }
};

const mapStateToProps = ({monthes}) => ({
    monthes
});

export default connect(mapStateToProps, {removeMonthBudgetItem})(Month);