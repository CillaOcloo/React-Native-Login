import {StatusBar} from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreens from './src/screens/SignUpScreens';






export default function App() {
    return (
        <View style={styles.container}>
            {/* <LoginScreens/> */}
            <SignUpScreens/>
            
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