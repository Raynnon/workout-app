import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';
import welcomeImage from '../assets/welcome-background.jpg';
import { Text } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import UIButton from '../components/interface/UIButton';
import InputTextLine from '../components/interface/InputTextLine';

export default function TrainingScreen() {
  const { h2 } = useTheme();

  return (
    <SafeAreaView style={styles.bigContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={welcomeImage}
            resizeMode="cover"
            style={{ maxHeight: 500 }}
          />
          <Text style={h2}>Pulls-ups</Text>
          <InputTextLine />
          <InputTextLine />
          <InputTextLine />
          <UIButton text="Next exercise" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: '#2F2F2F',
    paddingVertical: StatusBar.currentHeight
  },
  container: {
    flex: 1,

    alignItems: 'center'
  }
});
