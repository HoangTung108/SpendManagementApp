import React from 'react';
import {View,Text, Image, Pressable} from 'react-native';
import {styles} from '../Components/Style';
export const Data = () =>{
    return (
        <View>
            <Text>
            Hello
            </Text>
        <Pressable style={[styles.circleButtonAdd]}>
          <Image source = {require("../assets/plus.png")} style = { { width: 50, height: 50, tintColor:"#fff" }}></Image>
        </Pressable>
        </View>
    );
}