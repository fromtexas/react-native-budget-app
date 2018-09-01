import React from "react";
import { View, Text } from "react-native";
import MonthItemRound from "../components/MonthItemRound";

export default ({ month, removeItem }) => {
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
};

const styles = {
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
};
