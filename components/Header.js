import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class Header extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    elevation: 3,
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
    marginBottom: 25
  },
  text: {
    paddingLeft: 50,
    color: "#777",
    fontSize: 22,
    fontWeight: "bold"
  }
});
