import { useState } from 'react';
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
import InputTextLine from '../components/interface/InputTextLine';

export default function TrainingScreen() {
  const { h2 } = useTheme();
  const [sets, setSets] = useState([{ sets: 0, reps: 0, kg: 0 }]);

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

          <View style={{ height: 255 }}>
            {sets.map((x, index) => (
              <>
                <InputTextLine key={index} />
                <View>
                  <IconButton
                    icon="trash-can"
                    color="#ff1744"
                    size={22}
                    style={styles.iconButton}
                    onPress={() =>
                      setSets(
                        sets.filter((item, i) => {
                          return i !== index;
                        })
                      )
                    }
                  />
                </View>
              </>
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
                    setSets([...sets, { sets: 0, reps: 0, kg: 0 }])
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
