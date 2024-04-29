import React from 'react-native';
import { StyleSheet,TextInput, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react-native';


export default function App() {
  const[fontsLoaded,fontError] = useFonts ({
    "Pacifico" : require("./assets/fonts/Pacifico-Regular.ttf"),
  });
  const [text,setText] = useState ('');
  return (
    <View style={styles.container}>
      <Text style = {styles.header}>DuckyGala</Text>
      <Text>Your Spend: {text}</Text>
      <TextInput style = {styles.inputText}
      placeholder=' Cash here'
      onChangeText={ newText => setText (newText)}
      defaultValue= {text}
      />
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
    header:{
      color: "#fff",
      backgroundColor: "#000",
      fontFamily: "Pacifico",
      fontSize: 40,
    },
    inputText:{
      height: 40,

    }
});
