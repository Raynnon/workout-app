import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

const fullSet = ['Sets', 'Reps', 'Kg'];
export default function InputSet() {
  const [inputText, setInputText] = useState('');

  return (
    <View>
      <View style={styles.container}>
        {fullSet.map((input, index) => (
          <View style={styles.inputContainer} key={index}>
            <TextInput
              activeUnderlineColor="white"
              keyboardType="numeric"
              value={inputText}
              maxLength={3}
              style={styles.textInput}
              onChange={(e) => setInputText(e.target.value)}
            />
            <Text style={{ color: 'white' }}>{input}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  textInput: {
    width: 55,
    height: 40,
    backgroundColor: '#666666',
    textAlign: 'center',
    marginLeft: 0
  }
});
