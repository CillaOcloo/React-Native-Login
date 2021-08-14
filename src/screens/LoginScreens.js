import React from 'react'
import {StyleSheet, View, Text, TextInput,ScrollView,TouchableOpacity} from 'react-native'

export default function LoginScreens() {
    return (

        <ScrollView style = {styles.container}>
           <Text style ={styles.header}>Log in</Text>

              <TextInput
                style={styles.input}
                secureTextEntry={false}
                autoCompleteType='name'
                autoCapitalize='none'
                autoCorrect={true}
                placeholder ='Username'
                
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
                 <View style = {styles.line}></View>  

                 <TouchableOpacity style={styles.details}>
                     <Text  style={styles.detailsText}>Forgot Password?</Text>
               </TouchableOpacity>

               <View style= {styles.buttonContainer}>
                   <TouchableOpacity style={styles.button}>
                       <Text style={styles.buttonText}>Log in</Text>
                   </TouchableOpacity>
               </View>

               <View style ={styles.btnContainer}>
                  <Text style={styles.btnText}> Don't have account?
                  <TouchableOpacity style={styles.btn2}>
                      <Text style={styles.btn2Text}>Sign up</Text>
                  </TouchableOpacity>
                  </Text>
               </View>
             
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 100,
      marginHorizontal: 50,
    },

    header:{
        fontSize: 50,
        fontWeight: 'bold',
        color: '#6036b1', 
        flex: 0.2,  
        marginBottom: 45,
    },
     input:{
         justifyContent:'center',
         alignContent:'center',
         marginVertical: 20,
         fontSize: 22,
     },

     line : {
        width : '100%',
        height : 3,
        marginBottom: 12,
        backgroundColor : '#6036b1', 
            
    },

    details:{
       
       marginTop: 20,
       alignSelf: 'flex-end'
      
    },
    detailsText: {
        color: '#1d87fb',
        marginBottom: 30,

    },
    
    buttonContainer:{
        flex: 0.1,
        borderBottomColor: '#bec5cc',
        borderBottomWidth: 0.5,
        alignItems: 'center',    
    },
    button: {
        width:255,
        height: 55,
        backgroundColor: '#6036b1',
        borderRadius: 16,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    
    buttonText: {
        color: "white",
        fontSize: 18,
        textTransform:'capitalize',  
      },

    btnContainer:{
        marginTop: 20,
        alignSelf:'center',
    },
    btn2Text:{
        color:'#6036b1',
        marginLeft: 5,
        marginTop:2,
        fontSize: 16,
       
       
    },
    btnText:{
       marginTop: 20,
       alignSelf: 'center',
       fontSize: 18,

    }

  })
   
 
