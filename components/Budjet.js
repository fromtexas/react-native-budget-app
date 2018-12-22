import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import MonthItemRound from "../components/MonthItemRound";

export default function Budjet({ month, removeItem }) {
  let incomes = [];
  let costs = [];

  month.budget.forEach(item => {
    if (item.or) {
      incomes.push(
        <MonthItemRound
          key={item.id}
          monthId={month.id}
          removeItem={removeItem}
          {...item}
        />
      );
    } else {
      costs.push(
        <MonthItemRound
          key={item.id}
          monthId={month.id}
          removeItem={removeItem}
          {...item}
        />
      );
    }
  });

  return (
    <View style={styles.container}>
      {incomes.length ? <Text style={styles.txt}>Incomes:</Text> : null}
      {incomes}
      {costs.length ? <Text style={styles.txt}>Costs:</Text> : null}
      {costs}
    </View>
  );
}

Budjet.propTypes = {
  month: PropTypes.object,
  removeItem: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  txt: {
    fontSize: 20,
    color: "#777",
    marginLeft: 50,
    fontWeight: "bold",
    marginBottom: 10
  }
});
