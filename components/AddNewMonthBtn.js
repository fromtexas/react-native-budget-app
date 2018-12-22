import React, { PureComponent } from "react";
import { Icon } from "react-native-elements";
import uuid from "uuid/v1";
import PropTypes from "prop-types";
import { Animated, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, MONTHS, yyyy } from "../constants";

export default class AddNewMonthBtn extends PureComponent {
  state = {
    width: new Animated.Value(70),
    height: new Animated.Value(75),
    opacity: new Animated.Value(0),
    visible: false
  };

  renderMonths = () => {
    return MONTHS.map(item => (
      <TouchableOpacity key={item} onPress={this.add(item)}>
        <Text style={styles.text}>{item.toUpperCase()}</Text>
      </TouchableOpacity>
    ));
  };

  add = item => {
    return () => {
      const id = uuid();
      const date = `${item}, ${yyyy}`;
      this.props.addNew(date, id);
      this.addMonth();
    };
  };

  addMonth = () => {
    const { visible } = this.state;

    Animated.sequence([
      Animated.spring(this.state.width, {
        toValue: visible ? 70 : SCREEN_WIDTH,
        duration: 300
      }),
      Animated.timing(this.state.height, {
        toValue: visible ? 75 : SCREEN_HEIGHT,
        duration: 200
      }),
      Animated.spring(this.state.opacity, {
        toValue: visible ? 0 : 1,
        duration: 100
      })
    ]).start();

    this.setState({ visible: !visible });
  };

  render() {
    return (
      <Animated.View
        style={[
          styles.menuScale,
          { width: this.state.width, height: this.state.height }
        ]}
      >
        <Animated.View
          style={[
            styles.menuMonths,
            {
              display: this.state.visible ? "flex" : "none",
              opacity: this.state.opacity
            }
          ]}
        >
          {this.renderMonths()}
        </Animated.View>
        <Icon
          size={30}
          containerStyle={[styles.iconAddBtn]}
          name={this.state.visible ? "times" : "calendar-plus-o"}
          type="font-awesome"
          color="#fff"
          onPress={this.addMonth}
        />
      </Animated.View>
    );
  }
}

AddNewMonthBtn.propTypes = {
  addNew: PropTypes.func
};

const styles = StyleSheet.create({
  iconAddBtn: {
    zIndex: 102,
    position: "absolute",
    height: 75,
    width: 70,
    top: 0,
    right: 0,
    backgroundColor: "#ff6666"
  },
  menuMonths: {
    zIndex: 101,
    flex: 1,
    justifyContent: "center"
  },
  menuScale: {
    zIndex: 99,
    backgroundColor: "#ff6666",
    position: "absolute",
    top: 0,
    right: 0,
    height: 75,
    width: 70
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 30
  }
});
