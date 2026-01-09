import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const icons = {
  briefcase: require("../../images/briefcase.png"),
  cart: require("../../images/cart.png"),
  spotify: require("../../images/spotify.png"),
  laptop: require("../../images/laptop.png"),
  tv: require("../../images/tv.png"),
  default: require("../../images/header-image.png"),
};

const TransactionItem = ({item}) => {

    const amountColor = item.type === "income" ? "#6bc102" : "#ff0303ff";
    const amountSign = item.type === "income" ? "+" : "-";

    return (
        <View style={styles.transaction}>
            <Image style={styles.image} source={icons[item.icon] || icons[`default`]}/>
            <View style={{flex: 1}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.subtitle}</Text>
            </View>
            <Text style={[styles.amount, {color: amountColor}]}>{amountSign}${Math.abs(item.amount)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    transaction: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 50
    },
    amount: {
        fontSize: 18,
        fontWeight: "bold",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    }
})

export default TransactionItem;
