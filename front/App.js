import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TabNavigator from './src/components/TabNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
