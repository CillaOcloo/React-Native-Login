import React from 'react'
import {StyleSheet, View, Text, TextInput,ScrollView,TouchableOpacity } from 'react-native'

export default function SignUpScreens() {
    return (
       <ScrollView style={styles.container}>
            <Text style ={styles.header}>Sign up </Text>
              <TextInput 
                style={styles.input}
                secureTextEntry={false}
                autoCapitalize='none'
                autoCompleteType='name'
                autoCorrect={true}
                placeholder='Username'
               />
                <View style = {styles.line}></View>
                <TextInput 
                style={styles.input}
                secureTextEntry={false}
                autoCapitalize='none'
                autoCompleteType='email'
                autoCorrect={true}
                placeholder='Email'
               />
               <View style = {styles.line}></View>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                autoCompleteType='password'
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Password' 
                />
                <View style ={styles.line}></View>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                autoCompleteType='password'
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Password again' 
                />
                <View style ={styles.line}></View>
               <View style= {styles.buttonContainer}>
                   <TouchableOpacity style={styles.button}>
                       <Text style={styles.buttonText}>Sign up</Text>
                   </TouchableOpacity>
               </View>

               <View style ={styles.btnContainer}>
              <Text style={styles.btnText}>You already have account?
              <TouchableOpacity style={styles.btn2}>
              <Text style={styles.btn2Text}>Log in</Text>
                 </TouchableOpacity>
                  </Text>
               </View>
        
        </ScrollView>
       
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        marginTop: 100,
        marginHorizontal: 45,
    },
    header:{
        fontSize:50,
        fontWeight:'bold',
        color:'#6036b1',
        flex:0.2,
        marginBottom: 20,
      },
    input:{
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical:20,
        fontSize: 22,
      },
    line:{
        width:300,
        height: 3,
        marginBottom: 12,
        backgroundColor:'#6036b1',
    },
   
     buttonContainer:{
        flex: 0.1,
        borderBottomColor: '#bec5cc',
        borderBottomWidth: 0.5,
        alignItems: 'center',    
    },
    button: {
        width:280,
        height: 55,
        backgroundColor: '#6036b1',
        borderRadius: 18,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight:'bold',
        textTransform:'capitalize',  
      },

    btnContainer:{
        marginTop: 20,
        alignSelf:'center',
    },
    btn2Text:{
        color:'#6036b1',
        marginLeft: 7,
        marginTop:2,
        fontSize: 16,
       
       
    },
    btnText:{
       marginTop: 20,
       color:"gray",
       alignSelf: 'center',
       fontSize: 18,

    }

                

    
})
