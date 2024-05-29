import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert, Modal, Pressable, Image,TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import { styles } from '../Components/Style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useNavigation } from '@react-navigation/native';

function Block (){
  const [blocks, setBlocks] = useState([]);
    const navigation = useNavigation();
    const deleteBlock = (index) => {
      const newBlocks = [...blocks];
      newBlocks.splice(index, 1);
      setBlocks(newBlocks);
    };
    return(
      <TouchableOpacity
      style = {styles.box}
      accessible={true}
      onPress={() => navigation.navigate('Day')}
      >
      <View style={styles.button}>
      <Pressable style ={styles.cancelImage}
      onPress = {deleteBlock}>
      <Image source = {require("../assets/cross.png")} style = {{height:20, width: 20,}}></Image>
      </Pressable>

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

    const [variable, setVariable] = useState(0);
    const [title, setTitle] = useState("");
    const [onPress, setOnPress] = useState(true);

    const [blocks, setBlocks] = useState([]);
    const [date, setDate] = useState('');
  
  
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
         
        </View>
        <ScrollView style ={ styles.scrollview}>
        <FlatList 
         data = {blocks}
         renderItem={({ item }) => <Block />}
         numColumns={2} 
         ItemSeparatorComponent={() => <View style={styles.separator} />}/>
        </ScrollView>
      <Pressable
          style={[styles.circleButton]}
          onPress={addBlock}
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