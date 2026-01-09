import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const AppModel = ({ visible, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.ovarlay} >
        <View style={styles.modal}>
          <Text>{children}</Text>
          <Pressable onPress={onClose} style={styles["close-button"]}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ovarlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    fontSize: 24,
    color: "black",
    padding: 25,
    borderRadius: 12,
    width: "80%",
  },
  "close-button": {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#57B9FF",
    borderRadius: 8,
  },
});

export default AppModel;
