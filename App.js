import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import MonthList from './screens/MonthList';
import Chart from './screens/Chart';
import Month from './screens/Month';



export default class App extends React.Component {

  render() {
    const MainNavigator = TabNavigator({
      monthlist: { screen: MonthList },
      chart: {screen: Chart},
      month: {
        screen: StackNavigator({
          month: {screen: Month}
        })
      }
    },{
      tabBarPosition: 'bottom',
      lazy: true,
    });
    return (

      <View style={styles.container}>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
});
