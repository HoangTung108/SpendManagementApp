import React from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, Alert } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

function HomeScreen({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    "Pacifico": require("./assets/fonts/Pacifico-Regular.ttf"),
  });
  const insets = useSafeAreaInsets();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [text, setText] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [variable, setVariable] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [onPress, setOnPress] = React.useState(true);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

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
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: insets.top }}>
      <View style={styles.header}>
        <Text style={styles.headertext}>DuckyGala</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.textMid}>Day:</Text>
        <Text style={styles.textMid} onPress={handleParValue}>
          Your Spend: {variable} {title}
        </Text>
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
      </View>
      <View style={styles.buttonPos}>
        <Button style={styles.button} onPress={() => handlePress(true)} title="Plus" />
        <Button style={styles.button} onPress={() => handlePress(false)} title="Eliminate" />
      </View>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: insets.top }}>
      <Button title="Go to Second Screen" onPress={() => navigation.navigate('SecondScreen')} />
    </View>
    </View>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Second Screen</Text>
      <Button title="Go to Home Screen" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
  },
  headertext: {
    color: '#fff',
    fontFamily: 'Pacifico',
    fontSize: 40,
  },
  middle: {
    alignItems: 'center',
    paddingTop: 30,
  },
  textMid: {
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
    borderRadius: 5,
    backgroundColor: '#768',
    paddingVertical: 10,
    alignItems: 'center',
  },
});
