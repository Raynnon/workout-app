import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import InputTextItem from '../interface/InputTextItem';

export default function InputTextLine() {
  return (
    <View>
      <View style={styles.container}>
        <InputTextItem name={'Sets'} margin={false} />
        <InputTextItem name={'Reps'} margin={true} />
        <InputTextItem name={'Kg'} margin={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
