import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ScrollView, View } from 'react-native';
import {addMonth, removeMonth} from '../actions/monthActions';
import {counts} from '../utils';
import ListItemRound from '../components/ListItemRound';
import AddNewMonthBtn from '../components/AddNewMonthBtn';
import Header from '../components/Header';

class MonthList extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    }

    showList = (item) => {
        return () => this.props.navigation.navigate('month', {item});
    }

    addMore = (item) => {
        return () => this.props.navigation.navigate('form', {item});
    }

    removeMonth = (id) => {
        return () => {
            this.props.removeMonth(id);
        };
    }
    
    renderList = () => {
       return this.props.monthes.map(item => {
           let countsItem = counts(item.budget);
           return (
               <ListItemRound
                    key={item.id}
                    remove={this.removeMonth(item.id)}
                    showList={this.showList (item)}
                    addMore={this.addMore(item)}
                    {...countsItem}
                    date={item.date}
                />
           );
       });
    }
    
    render () {
        return (
            <View style={{flex: 1, position: 'relative'}}>
                
                <ScrollView >
                <Header title='Month List'/>
                    {this.renderList()}
                </ScrollView>
                <AddNewMonthBtn addNew = {this.props.addMonth}/>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    }
};

const mapStateToProps = ({monthes}) => ({
    monthes
});


export default connect(mapStateToProps, {addMonth, removeMonth})(MonthList);