import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import welcomeImage from '../assets/welcome-background.jpg';
import { Text } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { useTheme } from 'react-native-paper';
import UIButton from '../components/interface/UIButton';

export default function WelcomeScreen({ navigation }) {
  const { h1 } = useTheme();
  const [loaded] = useFonts({
    'Special Elite': require('../assets/fonts/SpecialElite-Regular.ttf')
  });

  if (!loaded) {
    return <></>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={welcomeImage}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={[styles.container, { alignItems: 'center' }]}>
          <Text style={h1}>My personal trainer</Text>
        </View>
        <View style={styles.bigContainer}>
          <UIButton
            text="Lets'go!"
            link={() => navigation.navigate('Training')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bigContainer: { flex: 2, justifyContent: 'center', alignItems: 'center' },
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
