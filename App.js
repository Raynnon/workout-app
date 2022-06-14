import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './theme/theme';

import WelcomeScreen from './screens/WelcomeScreen';
import TrainingScreen from './screens/TrainingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Training" component={TrainingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
