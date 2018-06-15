import React from 'react';
import { StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {TabNavigator} from 'react-navigation';
import store from './store';
import MonthList from './screens/MonthList';
import Month from './screens/Month';
import Form from './screens/Form';



export default class App extends React.PureComponent {

  render() {
    const MainNavigator = TabNavigator({
      monthlist: { screen: MonthList },
      form: {screen: Form},
      month: {screen: Month}
    },{
      navigationOptions: {
        tabBarVisible:  false
      },
      swipeEnabled: false,
      tabBarPosition: 'bottom',
      lazy: true,
    });
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  },
});
