import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import welcomeImage from '../assets/welcome-background.jpg';
import { Button } from 'react-native-paper';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={welcomeImage}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: 'white', marginTop: 150 }}>
            My personal trainer
          </Text>
        </View>
        <View
          style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
        >
          <Button
            mode="contained"
            color="white"
            onPress={() => console.log('Pressed')}
          >
            Let's Go !
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
