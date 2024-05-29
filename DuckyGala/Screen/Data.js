import React, {useState} from 'react';
import {View, Image, Pressable,Modal,Alert,TextInput,Button} from 'react-native';
import {styles} from '../Components/Style';
export const Data = () =>{
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const num = parseFloat(number);
  const handlePress = (isAdding) => {
  
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
    return (
        <View>
        <Pressable style={[styles.circleButtonAdd]}
        onPress = {() => setModalVisible(!modalVisible)}>
          <Image source = {require("../assets/plus.png")} style = { { width: 50, height: 50, tintColor:"#fff" }} ></Image>
        </Pressable>
        <Modal  animationType="slide"
          transparent={true}
          visible={ modalVisible}
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
    );
}