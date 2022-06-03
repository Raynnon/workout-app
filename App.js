import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/base';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Button title="My Button" onPress={() => ''} />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});