import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';

import welcomeImage from '../assets/welcome-background.jpg';
import { Text, Button, IconButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import UIButton from '../components/interface/UIButton';
import InputSet from '../components/interface/InputSet';

export default function TrainingScreen() {
  const { h2 } = useTheme();
  const [sets, setSets] = useState([{ sets: '', reps: '', kg: '' }]);

  const updateSet = (setIndex, set) => {
    const newArr = [...sets].map((currentSet, index) => {
      console.log(setIndex, index);
      if (setIndex === index) {
        return { sets: set.sets, reps: set.reps, kg: set.kg };
      } else {
        return currentSet;
      }
    });

    setSets(newArr);
  };

  return (
    <SafeAreaView style={styles.bigContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={welcomeImage}
            resizeMode="cover"
            style={{ height: 375 }}
          />
          <Text style={[h2, { marginVertical: 20 }]}>Pulls-ups</Text>

          <View style={{ maxHeight: 255 }}>
            {sets.map((set, index) => (
              <View
                key={index}
                style={{ flexDirection: 'row', marginBottom: 10 }}
              >
                <InputSet
                  key={index}
                  fullSet={set}
                  onValueChange={(newSet) => {
                    updateSet(index, newSet);
                  }}
                />

                <View style={{ marginBottom: 5 }}>
                  <IconButton
                    icon="trash-can"
                    color="#ff1744"
                    size={22}
                    style={styles.iconButton}
                    disabled={sets.length > 1 ? false : true}
                    onPress={() =>
                      setSets(
                        sets.filter((item, i) => {
                          return i !== index;
                        })
                      )
                    }
                  />
                </View>
              </View>
            ))}
            <View
              style={{
                flex: 1,
                width: '100%',
                alignSelf: 'center'
              }}
            >
              {sets.length < 3 ? (
                <Button
                  icon="plus-circle"
                  mode="contained"
                  style={{ borderRadius: 50 }}
                  onPress={() =>
                    setSets([...sets, { sets: '', reps: '', kg: '' }])
                  }
                >
                  Add new set
                </Button>
              ) : null}
            </View>
          </View>

          <UIButton text="Next exercise" backgroundColor="#ffc107" />
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
  },
  iconButton: { justifyContent: 'center', alignSelf: 'center' }
});
