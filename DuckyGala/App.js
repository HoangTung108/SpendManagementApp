import React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const[fontsLoaded,fontError] = useFonts ({
    "Pacifico" : require("./assets/fonts/Pacifico-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style = {styles.header}>DuckyGala</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    // height: Platform.OS ==="ios" ? 200:100,
  },
    header:{
      color: "#fff",
      backgroundColor: "#000",
      fontFamily: "Pacifico",
      fontSize: 40,
    },
});
