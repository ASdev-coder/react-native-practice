import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Main() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;