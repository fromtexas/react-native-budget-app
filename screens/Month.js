import React, { Component } from 'react';
import {View, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import {removeMonthBudgetItem} from '../actions/monthActions';
import MonthItemRound from '../components/MonthItemRound';
import Header from '../components/Header';
import BackBtn from '../components/BackBtn';


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

    back = () => {
        this.props.navigation.navigate('monthlist');
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
                <MonthItemRound key={item.id}  monthId={month.id} removeItem={this.removeItem} {...item} />
            );
        });
    }
    render () {    
        return (
            <ScrollView>
                <Header title={this.props.navigation.state.params.item.date} />
                <View style={styles.container}>
                    {this.renderBudget()}
                </View>
                <View style={styles.buttonContainer}>
                    <BackBtn back={this.back}/>
                    <Icon
                        size={30}
                        containerStyle={styles.addMore}
                        name='plus'
                        type='font-awesome'
                        color='#fff'
                        onPress={this.addMore} 
                    />  
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    container: {
        marginBottom: 50
    },
    addMore: {
        borderRadius: 50,
        height: 80,
        width: 80,
        backgroundColor: '#ff6666',
        marginRight: 5,
        marginLeft: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
};

const mapStateToProps = ({monthes}) => ({
    monthes
});

export default connect(mapStateToProps, {removeMonthBudgetItem})(Month);