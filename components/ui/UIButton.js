import { Button } from 'react-native-paper';

export default function UIButton() {
  return (
    <Button
      mode="contained"
      color="white"
      onPress={() => console.log('Pressed')}
      style={{ width: 200, borderRadius: 50 }}
      labelStyle={{ fontSize: 20 }}
    >
      Let's Go !
    </Button>
  );
}
