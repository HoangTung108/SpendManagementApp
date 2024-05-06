import React, {useState} from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, Alert, Modal, Pressable, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from "expo-linear-gradient";
import { useFonts } from 'expo-font';

function HomeScreen({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    "Pacifico": require("./assets/fonts/Pacifico-Regular.ttf"),
  });
  const insets = useSafeAreaInsets();
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [variable, setVariable] = useState(0);
  const [title, setTitle] = useState("");
  const [onPress, setOnPress] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (isAdding) => {
    const num = parseFloat(number);
    if (!isNaN(num) && typeof text === 'string' && text.trim() !== '') {
      if (isAdding) {
        setVariable(variable + num);
      } else {
        setVariable(variable - num);
      }
      setNumber('');
      setText('');
      setModalVisible(!modalVisible);
    } else if (isNaN(num)) {
      Alert.alert('Error', 'Invalid amount. Please enter a valid number.');
    } else {
      Alert.alert('Error', 'Invalid reasons. Please enter a reason.');
    }
  };

  const handleParValue = () => {
    if (onPress) {
      setTitle('VND');
    } else {
      setTitle(" ");
    }
    setOnPress(!onPress);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: insets.top ,
      flexDirection: 'collumn', }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#000",'#A455FF', 'transparent']}
        style={{ backgroundColor:'#ffbaff' ,paddingTop: insets.top, height: 900,   zIndex: -99, }}
      />
      <View style={styles.middle}>
      <Text style={styles.textMid}>Day:</Text>
        <Text style={styles.textMid} onPress={handleParValue}>
          Your Spend: {variable} {title}
        </Text>
        <Modal  animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style = {styles.modalView}>
          <Pressable
          onPress={() =>{setModalVisible(!modalVisible)} }>
          <Image source={require("./assets/cross.png")} style = {{width: 20, height:20}} ></Image>
          </Pressable>
          <TextInput
          style={styles.inputText}
          placeholder="The Reasons"
          onChangeText={setText}
          value={text}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Amount here"
          onChangeText={setNumber}
          value={number}
          keyboardType="numeric"
        />
        <View style={styles.buttonPos}>
        <Button style={styles.button} onPress={() => handlePress(true)} title="Plus" />
        <Button style={styles.button} onPress={() => handlePress(false)} title="Eliminate" />
        </View>
        </View>
        </Modal>
        <View style = {styles.positionAddItem}>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: insets.top }}>
      <Button title="Setting" onPress={() => navigation.navigate('Home')} />
    </View>
    <Pressable
        style={[styles.circleButton]}
        onPress={() => setModalVisible(true)}>
        <Image source = {require("./assets/plus.png")} style = { { width: 50, height: 50 }}></Image>
    </Pressable>
    <View style={styles.toolbar}>
        <Text style={styles.headertext}>Home</Text>
    </View>
    

   
    </View>
  );
}

function SecondScreen() {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headertext: {
    color: '#fff',
    fontFamily: 'Pacifico',
    fontSize: 40,
  },
  middle: {
    flex:2,
    alignItems: 'center',
    paddingTop: 60,
    zIndex: 1,
  },
  textMid: {
    alignContent: "center",
    alignItems: "center",
    fontSize: 25,
    paddingBottom: 10,
  },
  inputText: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonPos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 20,
  },
  button: {
    width: '40%',
    borderRadius: 10,
    backgroundColor: '#768',
    paddingVertical: 10,
    alignItems: 'center',
  },
  positionAddItem:{
    flex: 2,
    width: "100%",
    height : 300,
  },
  circleButton:{
    width: '20%',
    height: "10%",
    borderRadius: "100%",
    backgroundColor: '#003B64',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    alignSelf: 'center',
    bottom:-30,
    zIndex:1,
  },
  modalView: {
    margin: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#001932',
    height: 100,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
