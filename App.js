import {StatusBar} from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './src/screens/ListScreen';








export default function App() {
    return (
        <View style={styles.container}>
            {/* <LoginScreens/> */}
            {/* <SignUpScreens/> */}
            <ListScreen/>
            
            
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
})