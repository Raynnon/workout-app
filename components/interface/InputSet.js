import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export default function InputSet({ fullSet, onValueChange }) {
  return (
    <View>
      <View style={styles.container}>
        {Object.keys(fullSet).map((input, index) => {
          return (
            <View style={styles.inputContainer} key={index}>
              <TextInput
                activeUnderlineColor="white"
                keyboardType="numeric"
                value={fullSet[input]}
                maxLength={3}
                style={styles.textInput}
                onChangeText={(text) => {
                  onValueChange({ ...fullSet, [input]: text });
                }}
              />
              <Text style={{ color: 'white' }}>{input}</Text>
            </View>
          );
        })}
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
