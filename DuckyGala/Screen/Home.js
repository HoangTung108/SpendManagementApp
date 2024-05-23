import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert, Modal, Pressable, Image,TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import { styles } from '../Components/Style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useNavigation } from '@react-navigation/native';

function Block (){
    const navigation = useNavigation();
    return(
      <TouchableOpacity
      style = {styles.box}
      accessible={true}
      onPress={() => navigation.navigate('Day')}
      >
      <View style={styles.button}>
      <Text style={styles.buttonText}>Day: </Text>
      </View>
      </TouchableOpacity>
    );
  }
export const HomeScreen = ({ navigation }) => {
    const [fontsLoaded, fontError] = useFonts({
      "Pacifico": require('../assets/fonts/Pacifico-Regular.ttf'),
    });
    const insets = useSafeAreaInsets();
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
    const [variable, setVariable] = useState(0);
    const [title, setTitle] = useState("");
    const [onPress, setOnPress] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [blocks, setBlocks] = useState([]);
    const [date, setDate] = useState('');
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
      setBlocks([...blocks, {}]);
      setDate(date + 1);
    };
    const deleteBlock = (index) => {
      const newBlocks = [...blocks];
      newBlocks.splice(index, 1);
      setBlocks(newBlocks);
    };
    const CheckFont = ()=>{
      if (!fontsLoaded && !fontError) {
        return null;
      }
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
        <Text style={styles.headertext} onLayout={CheckFont}>Home</Text>
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
            <Image source={require("../assets/cross.png")} style = {{width: 20, height:20, left:"45%",}} ></Image>
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
        <ScrollView>
        <FlatList 
         data = {blocks}
         renderItem={({ item }) => <Block />}
         numColumns={2} 
         ItemSeparatorComponent={() => <View style={styles.separator} />}/>
        </ScrollView>
        <Button title="Thêm Khối" onPress={addBlock} />
        <Button title= "Delete khoi" onPress={deleteBlock}/>
      <Pressable
          style={[styles.circleButton]}
          onPress={() => setModalVisible(true)}
          >
          <Image source = {require("../assets/plus.png")} style = { { width: 50, height: 50, tintColor:"#fff" }}></Image>
      </Pressable>
      <View style={styles.toolbar}>
        <Pressable
        style={styles.Setting}
        onPress= {() => navigation.navigate('Setting')}>
        <Image source={require("../assets/settings.png")} style ={{width:50, height:50, tintColor: "#fff"}} ></Image>
        </Pressable>
      </View>
      </View>
    );
  }