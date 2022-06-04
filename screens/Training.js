import { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import welcomeImage from '../assets/welcome-background.jpg';
import { Text, TextInput } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { useTheme } from 'react-native-paper';
import UIButton from '../components/interface/UIButton';

const repetitions = ['sets', 'reps', 'kg'];

export default function Training() {
  const [inputSets, setInputSets] = useState('0');
  const { h2 } = useTheme();
  const [loaded] = useFonts({
    'Special Elite': require('../assets/fonts/SpecialElite-Regular.ttf')
  });

  if (!loaded) {
    return <></>;
  }

  return (
    <SafeAreaView style={styles.bigContainer}>
      <View style={styles.topContainer}>
        <Image
          source={welcomeImage}
          resizeMode="cover"
          style={{ height: 400 }}
        />

        <Text style={h2}>Pulls-ups</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          {repetitions.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderLeftWidth: 2,
                  borderColor: '#666666',
                  marginLeft: 15
                }}
              >
                <TextInput
                  activeUnderlineColor="transparent"
                  keyboardType="numeric"
                  value={inputSets}
                  maxLength={3}
                  style={{
                    width: 50,
                    backgroundColor: '#666666',
                    marginLeft: index === 0 ? 0 : 20,
                    marginRight: 10,
                    textAlign: 'center'
                  }}
                  onChange={(e) => setInputSets(e.target.value)}
                />
                <Text style={{ color: 'white' }}>{item}</Text>
              </View>
            );
          })}
        </View>
        <UIButton text="Next exercise" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: '#2F2F2F'
  },
  topContainer: {
    flex: 2,
    justifyContent: 'space-around',
    paddingVertical: 100,
    paddingHorizontal: 50,
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
