import { Button } from 'react-native-paper';

export default function UIButton({ link, text }) {
  return (
    <Button
      mode="contained"
      color="white"
      onPress={() => link()}
      style={{ width: 200, borderRadius: 50 }}
      labelStyle={{ fontSize: 20 }}
    >
     {text}
    </Button>
  );
}
