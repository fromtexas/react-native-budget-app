import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Text } from "react-native";
import PropTypes from "prop-types";
import { addMonth, removeMonth } from "../actions/monthActions";
import { counts } from "../utils";
import ListItemRound from "../components/ListItemRound";
import AddNewMonthBtn from "../components/AddNewMonthBtn";
import Header from "../components/Header";

class MonthList extends PureComponent {
  static navigationOptions = {
    tabBarLabel: "Home"
  };

  showList = item => {
    return () => this.props.navigation.navigate("month", { item });
  };

  addMore = item => {
    return () => this.props.navigation.navigate("form", { item });
  };

  removeMonth = id => {
    return () => {
      this.props.removeMonth(id);
    };
  };

  renderList = () => {
    if (!this.props.monthes.length) {
      return (
        <Text
          style={{
            color: "#999",
            fontSize: 22,
            textAlign: "center",
            marginTop: 150,
            opacity: 0.7
          }}
        >
          Add month and your costs
        </Text>
      );
    }
    return this.props.monthes.map(item => {
      let countsItem = counts(item.budget);
      return (
        <ListItemRound
          key={item.id}
          remove={this.removeMonth(item.id)}
          showList={this.showList(item)}
          addMore={this.addMore(item)}
          {...countsItem}
          date={item.date}
        />
      );
    });
  };

  render() {
    return (
      <View style={{ flex: 1, position: "relative" }}>
        <ScrollView>
          <Header title="Months" />
          {this.renderList()}
        </ScrollView>
        <AddNewMonthBtn addNew={this.props.addMonth} />
      </View>
    );
  }
}

MonthList.propTypes = {
  monthes: PropTypes.array,
  removeMonth: PropTypes.func,
  addMonth: PropTypes.func
};

const mapStateToProps = ({ monthes }) => ({
  monthes
});

export default connect(
  mapStateToProps,
  { addMonth, removeMonth }
)(MonthList);
