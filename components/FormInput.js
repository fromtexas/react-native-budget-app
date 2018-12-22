import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function FormInput({ onChangeText, value, placeholder }) {
  return (
    <View style={styles.inputWrap}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

FormInput.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 18
  },
  inputWrap: {
    height: 80,
    backgroundColor: "#f1f1f1",
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    marginBottom: 20
  }
});
