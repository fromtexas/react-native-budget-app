import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ScrollView, View } from 'react-native';
import NewMonthForm from '../components/NewMonthForm';
import {addMonth, removeMonth} from '../actions/monthActions';
import {counts} from '../utils';
import MonthListItem from '../components/MonthListItem';
import ListItemRound from '../components/ListItemRound';

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
            <ScrollView >
                <NewMonthForm  addNew = {this.props.addMonth}/>
                {this.renderList()}
            </ScrollView>
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