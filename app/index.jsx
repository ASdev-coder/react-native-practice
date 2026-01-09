import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../src/components/ui/Header.jsx";
import Separator from "../src/components/ui/Separator.jsx";
import BalanceCard from "../src/components/ui/BalanceCard.jsx";
import { transactions } from "../src/data/transactionsData.js";
import StatsSection from "../src/components/ui/StatsSection.jsx";
import TransactionsList from "../src/components/ui/TransactionsList.jsx";

const Index = () => {
  const [data, setData] = useState(transactions);

  return (
    <View flex={1}>
      <Header />
      <View style={styles.center}>
        <Separator size={20} />
        <BalanceCard transactions={data} />
        <Separator size={25} />
        <StatsSection transactions={data}/>
        <Separator size={30} />
        <TransactionsList transactions={data}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Index;
