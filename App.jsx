import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView, Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import StackNavigator from './Source/Navigation/Stacks';
function App() {
 

  return (
    
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  
  );
}

export default App;
