import React, { PureComponent } from "react";
import { Card, ListItem, Icon } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class MonthListItem extends PureComponent {
  render() {
    return (
      <View>
        <Card
          containerStyle={styles.cardContainer}
          titleStyle={styles.listItem}
          title={"Budget for: " + this.props.date}
        >
          <ListItem
            containerStyle={styles.itemContainer}
            titleStyle={styles.listItem}
            leftIcon={{ name: "plus", type: "font-awesome", color: "#ff6666" }}
            hideChevron
            title={"Incomes: " + this.props.incomes + " $"}
          />
          <ListItem
            containerStyle={styles.itemContainer}
            titleStyle={styles.listItem}
            leftIcon={{ name: "minus", type: "font-awesome", color: "#ff6666" }}
            hideChevron
            title={"Costs: " + this.props.costs + " $"}
          />
          <ListItem
            containerStyle={styles.itemContainer}
            titleStyle={styles.listItem}
            leftIcon={{ name: "check", type: "font-awesome", color: "#ff6666" }}
            hideChevron
            title={"Profit: " + this.props.profit + " $"}
          />
          <View style={styles.iconsContainer}>
            <Icon
              raised
              name="plus"
              type="font-awesome"
              color="#ff6666"
              onPress={this.props.addMore}
            />
            <Icon
              raised
              name="list-ul"
              type="font-awesome"
              color="#ff6666"
              onPress={this.props.showList}
            />
            <Icon
              raised
              name="close"
              type="font-awesome"
              color="#ff6666"
              onPress={this.props.remove}
            />
          </View>
        </Card>
      </View>
    );
  }
}

MonthListItem.propTypes = {
  addMore: PropTypes.func,
  showList: PropTypes.func,
  remove: PropTypes.func
};

const styles = StyleSheet.create({
  iconsContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center"
  },
  listItem: {
    fontSize: 18,
    color: "#777"
  },
  itemContainer: {
    borderBottomColor: "#fff"
  }
});
