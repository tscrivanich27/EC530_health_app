// Imports for App.js
import React from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';

import LoginScreen from './components/LoginScreen';
import RegistrationScreen from './components/RegistrationScreen';
import HomeScreen from './components/HomeScreen'
import ChatScreen from './components/ChatScreen'
import MetricsScreen from './components/MetricsScreen';

//Initialize a new stack 
const Stack = createNativeStackNavigator();

//Ignore all yellow warnings
LogBox.ignoreAllLogs(true)

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Metrics" component={MetricsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App)