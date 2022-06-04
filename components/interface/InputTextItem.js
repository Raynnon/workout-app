import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export default function InputTextItem({ name, margin }) {
  const [inputText, setInputText] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        activeUnderlineColor="white"
        keyboardType="numeric"
        value={inputText}
        maxLength={3}
        style={[styles.textInput, { marginLeft: !margin ? 0 : 20 }]}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="0"
      />
      <Text style={{ color: 'white' }}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderColor: '#666666',
    marginLeft: 15
  },
  textInput: {
    width: 55,
    height: 40,
    backgroundColor: '#666666',
    marginRight: 10,
    textAlign: 'center'
  }
});
