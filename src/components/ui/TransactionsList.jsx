import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import TransactionItem from "./TransactionItem";
import Separator from "./Separator";

const TransactionsList = ({ transactions = [] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
      </View>

      <Separator size={20} />

      <View style={styles.listWrapper}>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionItem item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, color: "gray" }}>
              No transactions
            </Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    color: "#585858ff",
    fontWeight: "bold",
  },
  listWrapper: {
    width: "100%",
    flex: 1,
  },
});

export default TransactionsList;
