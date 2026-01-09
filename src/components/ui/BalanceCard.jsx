import React, { useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import AppModal from "./Modal/AppModal";

const BalanceCard = ({ transactions = [] }) => {
  const [visible, setVisible] = useState(false);

  const totalBalance = () => {
    const total = transactions.reduce((Balance, transaction) => {
      return Balance + transaction.amount;
    }, 0);

    return total.toFixed(2);
  }

  const OnPress = () => {
    setVisible(true);
  };

  return (
    <View style={styles.BalanceCard}>
      <Text style={styles.TotalBalance}>Total Balance</Text>
      <ImageBackground
        source={require("../../images/header-image.png")}
        style={styles["background-image"]}
      >
        <Text style={styles.Balance}>${totalBalance()}</Text>
      </ImageBackground>
      <View style={styles.Pressables}>
        <Pressable style={styles.Pressable} onPress={OnPress}>
          <FontAwesome5 name="telegram-plane" size={24} color="#57B9FF" />
          <Text>Send</Text>
        </Pressable>
        <Pressable style={styles.Pressable} onPress={OnPress}>
          <Entypo name="arrow-down" size={24} color="#57B9FF" />
          <Text>Receive</Text>
        </Pressable>
        <Pressable style={styles.Pressable} onPress={OnPress}>
          <MaterialCommunityIcons name="clock" size={24} color="black" />
          <Text>History</Text>
        </Pressable>
      </View>

      <AppModal visible={visible} onClose={() => setVisible(false)}>
        <Text>In soon...</Text>
      </AppModal>
    </View>
  );
};

const styles = StyleSheet.create({
  BalanceCard: {
    width: "90%",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  Pressables: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 15,
  },
  Balance: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  "background-image": {
    width: "100%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Pressable: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    flex: 1,
    marginHorizontal: 10,
  },
  TotalBalance: {
    color: "#a19e9eff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default BalanceCard;
