import { StyleSheet,TextInput, Text, View, Alert,Button } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';


export default function App() {
  const[fontsLoaded,fontError] = useFonts ({
    "Pacifico" : require("./assets/fonts/Pacifico-Regular.ttf"),
  });
  const [text,text1,setText] = useState ('');
  const value = 0;
  return (
    <View style={styles.container}>
      <Text style = {styles.header}>DuckyGala</Text>
      <Text>Your Spend: {value}</Text>
      <TextInput style = {styles.inputText}
      placeholder='The Reasons'
      onChangeText={ newText => setText (newText)}
      defaultValue= {text}
      />
      <TextInput style = {styles.inputText}
      placeholder='Amout here'
      onChangeText={ newText => setText(newText)}
      defaultValue= {text1}
      />
      <Button style = {styles.button} onPress = { ()=>value +=1} title ="Plus" />
      <Button style = {styles.button} onPress = {()=>alert("Deduct your amount")} title = "Eliminate"/>
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
    },
    button:{
      height:40,
      width: 60,
    },
});
