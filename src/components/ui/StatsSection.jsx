import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AppModal from "./Modal/AppModal";

const StatsSection = ({ transactions = [] }) => {
  const [visible, setVisible] = useState(false);

  const income = transactions.reduce((sum, t) => {
    return t.type === "income" ? sum + t.amount : sum;
  }, 0);

  const expenses = transactions.reduce((sum, t) => {
    return t.type === "expense" ? sum + t.amount : sum;
  }, 0);

  const OnPress = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.income} onPress={OnPress}>
        <MaterialCommunityIcons
          name="arrow-up-bold-hexagon-outline"
          size={70}
          color="black"
        />
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: "#6bc102ff" }]}>Income</Text>
          <Text style={styles.amount}>+ ${income.toFixed(0)}</Text>
        </View>
      </Pressable>
      <Pressable style={styles.outcome} onPress={OnPress}>
        <MaterialCommunityIcons
          name="arrow-down-bold-hexagon-outline"
          size={70}
          color="black"
        />
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: "#d30303ff" }]}>Expenses</Text>
          <Text style={styles.amount}>- ${Math.abs(expenses.toFixed(0))}</Text>
        </View>
      </Pressable>

      <AppModal visible={visible} onClose={() => setVisible(false)}>
        <Text>In soon...</Text>
      </AppModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: 100,
    gap: 10,
  },
  income: {
    backgroundColor: "#a9db6b6f",
    width: "50%",
    height: "100%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  outcome: {
    backgroundColor: "#ff0e0e3a",
    width: "50%",
    height: "100%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StatsSection;
