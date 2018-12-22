import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

export default function BackBtn(props) {
  return (
    <Icon
      size={30}
      containerStyle={[styles.back, props.style]}
      name="reply"
      type="font-awesome"
      color="#fff"
      onPress={props.back}
    />
  );
}

BackBtn.propTypes = {
  style: PropTypes.object,
  back: PropTypes.func
};

const styles = StyleSheet.create({
  back: {
    borderRadius: 50,
    height: 80,
    width: 80,
    backgroundColor: "#ff6666"
  }
});
