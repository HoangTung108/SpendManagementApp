import { StyleSheet,TextInput, Text, View, Switch,Button, Alert } from 'react-native';
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
function HomeScreen(){
    const[fontsLoaded,fontError] = useFonts ({
      "Pacifico" : require("./assets/fonts/Pacifico-Regular.ttf"),
    });
    const insets = useSafeAreaInsets();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [text,setText] = useState ('');
    const [number,setNum] = useState(0);
    const [variable, setCount] = useState(0);
    const [title, setTitle] = useState(variable);
    const [onPress, setBool] = useState(true);
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
    function ParValue(){
      if (onPress){
          setTitle(variable + " VND");
          setBool(false);
      } else {
        setTitle (variable.toString());
        setBool(true);
      }
   
    }
  return (
    <View style = {{ flex: 1,paddingTop: insets.top, backgroundColor: '#fff'}}>
      <View style = {styles.header}>
        <Text style = {styles.headertext}>DuckyGala</Text>
      </View>
      <View style = {styles.middle}>
        <Text style = {styles.textMid}> Day: </Text>
        <Text style = {styles.textMid} onPress = {ParValue}>Your Spend: {title}</Text>
        <TextInput style = {styles.inputText}
        placeholder='The Reasons'
        onChangeText={setText}
        defaultValue= {text}
        />
        <TextInput style = {styles.inputText}
        placeholder='Amout here'
        onChangeText={setNum}
        defaultValue= {number}
        keyboardType = "numeric"
        />
      </View>
      <View style= {styles.buttonPos}>
        <Button style = {styles.button} onPress = {Press} title ="Plus" />
        <Button style = {styles.button} onPress = {Elimination} title = "Eliminate"/>
      </View>
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
export default function App() {
  return(
  <SafeAreaProvider>
    <HomeScreen />
  </SafeAreaProvider>);
}
const styles = StyleSheet.create({
  header:{
      flex:1/5,
      backgroundColor: "#000",
      width:430,
    },
    headertext:{
      color: "#fff",
      fontFamily: "Pacifico",
      fontSize: 40,
      paddingTop: 40,
      position: "flexible",
    },
    middle: {
      flex: 1/3,
      paddingTop: 100,
    },
    textMid:{
      fontSize: 25,
    },
    inputText:{
      paddingTop: 80,
      height: 40,
    },
    buttonPos:{
      paddingTop: 30,
    },
    button:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
});
