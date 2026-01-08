import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import AppModal from "./Modal/AppModal";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const OnPress = () => {
    setVisible(true);
  };

  return (
    <View style={styles.header}>
      <ImageBackground
        source={require("../images/header-image.png")}
        style={styles["header-image"]}
      >
        <View style={styles["header-content"]}>
          <Image
            source={require("../images/face-hi.png")}
            style={styles["face-hi"]}
          />
          <View style={styles["header-text"]}>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                marginLeft: 10,
              }}
            >
              Welcome back!
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              John Doe
            </Text>
          </View>
        </View>
        <Pressable onPress={() => OnPress()} style={{ marginRight: 20 }}>
          <FontAwesome name="bell" size={32} color="white" />
        </Pressable>

        <AppModal visible={visible} onClose={() => setVisible(false)}>
          <Text>In soon...</Text>
        </AppModal>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  "header-image": {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  "face-hi": {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    marginLeft: 20,
  },
  "header-text": {
    display: "flex",
    flexDirection: "column",
  },
  "header-content": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
