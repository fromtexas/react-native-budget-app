import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { SCREEN_WIDTH } from "../constants";

export default class MonthItemRound extends Component {
  render() {
    const icon = this.props.or ? "plus" : "minus";
    return (
      <View style={styles.container}>
        <Icon
          size={30}
          containerStyle={styles.iconLeft}
          name={icon}
          type="font-awesome"
          color="#ff6666"
        />
        <View>
          <Text style={styles.text}>{this.props.text}</Text>
          <Text style={styles.numbers}>{"$ " + this.props.$}</Text>
        </View>
        <Icon
          size={30}
          containerStyle={styles.iconRight}
          name="times"
          type="font-awesome"
          color="#fff"
          onPress={this.props.removeItem(this.props.monthId, this.props.id)}
        />
      </View>
    );
  }
}

MonthItemRound.propTypes = {
  removeItem: PropTypes.func,
  monthId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  $: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  or: PropTypes.bool
};

const styles = StyleSheet.create({
  iconLeft: {
    borderRadius: 50,
    width: 80
  },
  iconRight: {
    borderRadius: 50,
    height: 80,
    width: 80,
    backgroundColor: "#ff6666"
  },
  container: {
    width: SCREEN_WIDTH - 10,
    borderRadius: 50,
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 5
  },
  text: {
    fontSize: 20,
    color: "#555"
  },
  numbers: {
    fontSize: 16,
    color: "#555"
  }
});
