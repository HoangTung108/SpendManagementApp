import { StyleSheet,TextInput, Text, View, Switch,Button, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';


export default function App() {
  const[fontsLoaded,fontError] = useFonts ({
    "Pacifico" : require("./assets/fonts/Pacifico-Regular.ttf"),
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [text,setText] = useState ('');
  const [number,setNum] = useState(0);
  const [variable, setCount] = useState(0);
  function Press() {
    const num = parseFloat(number);
    if (!isNaN(num) && typeof text === "string" && text.trim() !== "") {
        setCount(variable + num);
        setNum(0);
        setText("");
    } else if (isNaN(num)) {
        Alert.alert("Error", "Invalid amount. Please enter a valid number.");
    } else {
        Alert.alert("Error", "Invalid reasons. Please enter a reason.");
    }
  }
  function Elimination(){
    const num = parseFloat(number);
    if (!isNaN(num) && typeof text === "string" && text.trim() !== "") {
        setCount(variable - num);
        setNum(0);
        setText("");
    } else if (isNaN(num)) {
        Alert.alert("Error", "Invalid amount. Please enter a valid number.");
    } else {
        Alert.alert("Error", "Invalid reasons. Please enter a reason.");
    }
  }
  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>DuckyGala</Text>
      <Text>Your Spend: {variable}</Text>
      <TextInput style = {styles.inputText}
      placeholder='The Reasons'
      onChangeText={setText}
      defaultValue= {text}
      keyboardType ="string"
      />
      <TextInput style = {styles.inputText}
      placeholder='Amout here'
      onChangeText={setNum}
      defaultValue= {number}
      keyboardType = "numeric"
      />
      <Button style = {styles.button} onPress = {Press} title ="Plus" />
      <Button style = {styles.button} onPress = {Elimination} title = "Eliminate"/>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
    header:{
      flex:1/5,
      color: "#fff",
      backgroundColor: "#000",
      width:500,
      fontFamily: "Pacifico",
      fontSize: 40,
      paddingTop: 40,
      position: "flexible",
    },
    inputText:{
      height: 40,
    },
    button:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
});
