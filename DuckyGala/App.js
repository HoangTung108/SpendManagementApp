import React from 'react';
import { View, Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './Screen/Home'
import { Setting } from './Screen/Setting';


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
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name ="ScreenView" component={ ScreenView} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

