import { Button } from 'react-native-paper';

export default function UIButton({ link, text, additionalStyles }) {
  return (
    <Button
      mode="contained"
      color="white"
      onPress={() => link()}
      style={[
        { width: 200, borderRadius: 50 },
        additionalStyles ? additionalStyles : {}
      ]}
      labelStyle={{ fontSize: 20 }}
    >
      {text}
    </Button>
  );
}
