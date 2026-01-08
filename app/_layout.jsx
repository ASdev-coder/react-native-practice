import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Slot } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <Slot />

        </SafeAreaView>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({

});

export default RootLayout;
