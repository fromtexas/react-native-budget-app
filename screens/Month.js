import React, { PureComponent } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import { removeMonthBudgetItem } from "../actions/monthActions";
import Header from "../components/Header";
import BackBtn from "../components/BackBtn";
import Budjet from "../components/Budjet";

class Month extends PureComponent {
  removeItem = (id, itemId) => {
    return () => {
      this.props.removeMonthBudgetItem(id, itemId);
    };
  };

  addMore = () => {
    const item = this.props.navigation.state.params.item;
    this.props.navigation.navigate("form", { item });
  };

  back = () => {
    this.props.navigation.navigate("monthlist");
  };

  renderBudget() {
    if (!this.props.navigation.state.params) {
      return <Text>There is no month u are loooking for!GTFO</Text>;
    }
    const month = this.props.monthes.find(
      item => item.id === this.props.navigation.state.params.item.id
    );
    if (!month) {
      return <Text>There is no month u are loooking for!GTFO</Text>;
    }
    return <Budjet removeItem={this.removeItem} month={month} />;
  }

  render() {
    return (
      <ScrollView>
        <Header title={this.props.navigation.state.params.item.date} />
        {this.renderBudget()}
        <View style={styles.buttonContainer}>
          <BackBtn back={this.back} />
          <Icon
            size={30}
            containerStyle={styles.addMore}
            name="plus"
            type="font-awesome"
            color="#fff"
            onPress={this.addMore}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  addMore: {
    borderRadius: 50,
    height: 80,
    width: 80,
    backgroundColor: "#ff6666",
    marginRight: 5,
    marginLeft: 10
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 25
  }
});

Month.propTypes = {
  monthes: PropTypes.array,
  removeMonthBudgetItem: PropTypes.func,
  navigation: PropTypes.object
};

const mapStateToProps = ({ monthes }) => ({
  monthes
});

export default connect(
  mapStateToProps,
  { removeMonthBudgetItem }
)(Month);
