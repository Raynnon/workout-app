import { Button } from 'react-native-paper';

export default function UIButton({
  link,
  text,
  backgroundColor,
  additionalStyles
}) {
  return (
    <Button
      mode="contained"
      color="white"
      onPress={() => {
        link ? link() : console.log('Pressed');
      }}
      style={[
        {
          width: 200,
          borderRadius: 50,
          backgroundColor: backgroundColor ? backgroundColor : 'white'
        },
        additionalStyles ? additionalStyles : {}
      ]}
      labelStyle={{ fontSize: 20 }}
    >
      {text}
    </Button>
  );
}
