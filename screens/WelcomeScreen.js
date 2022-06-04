import { ImageBackground, StyleSheet, View } from 'react-native';
import welcomeImage from '../assets/welcome-background.jpg';
import { Text } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { useTheme } from 'react-native-paper';
import UIButton from '../components/ui/UIButton';

export default function WelcomeScreen() {
  const { h1 } = useTheme();
  const [loaded] = useFonts({
    'Special Elite': require('../assets/fonts/SpecialElite-Regular.ttf')
  });

  if (!loaded) {
    return <></>;
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={welcomeImage}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={[styles.container, { alignItems: 'center' }]}>
          <Text style={h1}>My personal trainer</Text>
        </View>
        <View style={styles.bigContainer}>
          <UIButton />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  bigContainer: { flex: 2, justifyContent: 'center', alignItems: 'center' }
});
