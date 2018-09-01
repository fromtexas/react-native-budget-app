import React from "react";
import { Icon } from "react-native-elements";

export default props => {
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
};

const styles = {
  back: {
    borderRadius: 50,
    height: 80,
    width: 80,
    backgroundColor: "#ff6666"
  }
};
