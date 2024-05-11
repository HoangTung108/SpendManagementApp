import React, {useState} from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, Alert, Modal, Pressable, Image,TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from "expo-linear-gradient";
import { useFonts } from 'expo-font';

function Block (){
  const navigation = useNavigation();
  return(
    <TouchableOpacity
    style = {styles.box}
    accessible={true}
    accessibilityLabel="Tap me!"
    onPress={() => navigation.navigate('ScreenView')}
    >
    <View style={styles.button}>
    <Text style={styles.buttonText}>Press me!</Text>
    </View>
    </TouchableOpacity>
  
  );
}
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
  const [blocks, setBlocks] = useState([]);
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

  const addBlock = () => {
    setBlocks([...blocks, {}]); // Thêm một đối tượng mới vào mảng blocks
  };
  const deleteBlock = (index) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
  };

return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: insets.top ,
      flexDirection: 'collumn', }}>
        <LinearGradient
        colors={["#6a9cfd", "#ffb8d0"]}
        style={{ backgroundColor:"#ffb8d0" ,
        top: insets.top,  
        left: 0,
        right: 0,
        height: "100%",  position: 'absolute'  }}
      />
      <Text style={styles.headertext}>Home</Text>
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
          <Image source={require("./assets/cross.png")} style = {{width: 20, height:20, left:"45%",}} ></Image>
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
      </View>
      
      <ScrollView style = {{flexDirection:'row'}}> 
        {blocks.map((block, index) => (
        <Block key={index}/>
      ))}
        </ScrollView>
      
  
      <Button title="Thêm Khối" onPress={addBlock} />
      <Button title= "Delete khoi" onPress={deleteBlock}/>
    <Pressable
        style={[styles.circleButton]}
        onPress={() => setModalVisible(true)}
        >
        <Image source = {require("./assets/plus.png")} style = { { width: 50, height: 50, tintColor:"#fff" }}></Image>
    </Pressable>
    <View style={styles.toolbar}>
      <Pressable
      style={styles.Setting}
      onPress= {() => navigation.navigate('Setting')}>
      <Image source={require("./assets/settings.png")} style ={{width:50, height:50, tintColor: "#fff"}} ></Image>
      </Pressable>
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
function ScreenView(){
  return(
    <View>
      <Text>Hello</Text>
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
          <Stack.Screen name="Setting" component={SecondScreen} />
          <Stack.Screen name ="ScreenView" component={ ScreenView} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headertext: {
    left:20,
    color: '#fff',
    fontFamily: 'Pacifico',
    fontSize: 50,},
  middle: {
    flex:2,
    alignItems: 'center',
    paddingTop: 60,
    zIndex: 1,
  },
  textMid: {
    color: '#fff',
    alignContent: "center",
    alignItems: "center",
    fontFamily: 'Pacifico',
    fontSize: 25,
    paddingBottom: 10,
  },
  inputText: {
    height: "22%",
    width: '80%',
    top:10,
    borderWidth: 1.5,
    borderColor: '#ccc',
    marginBottom: 15,
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
  circleButton:{
    width: '20%',
    height: "10%",
    borderRadius: "100%",
    backgroundColor: '#ffb8d0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    alignSelf: 'center',
    bottom:-30,
    zIndex:1,
  },
  Setting:{
    alignSelf: 'center',
    left: 100,
    bottom:0,
    zIndex:1,
  },
  modalView: {
    height:230,
    width: "80%",
    top:'40%',
    padding:20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: "center",
    position:"relative",
    shadowColor: '#000',
  
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

  },
  toolbar: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fdccd4',
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
  box:{
    height: 150,
    width:150,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
});
