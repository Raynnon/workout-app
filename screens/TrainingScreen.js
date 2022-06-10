import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import welcomeImage from '../assets/welcome-background.jpg';
import { Text, Button } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import UIButton from '../components/interface/UIButton';
import InputTextLine from '../components/interface/InputTextLine';

export default function TrainingScreen() {
  const { h2 } = useTheme();
  const [numberOfSets, setNumberOfSets] = useState(1);

  return (
    <SafeAreaView style={styles.bigContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={welcomeImage}
            resizeMode="cover"
            style={{ height: 450 }}
          />
          <Text style={[h2, { marginVertical: 20 }]}>Pulls-ups</Text>

          <View style={{ height: 175 }}>
            {Array.from(Array(numberOfSets)).map((x, index) => (
              <InputTextLine key={index} />
            ))}
            <View
              style={{
                flex: 1,
                width: '100%',
                alignSelf: 'center'
              }}
            >
              <Button
                icon="plus-circle"
                mode="contained"
                onPress={() => console.log('Pressed')}
                style={{ borderRadius: 50 }}
              >
                Add new set
              </Button>
            </View>
          </View>

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
