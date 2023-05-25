import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image, Linking} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from 'react';
import { addStudent, addUser } from '../../firebase';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  function validate_field(){
    if(email =="" && password == "" && confirmpassword == "" && username == ""){
      alert("Please complete the information!")
      return false
    }else if (email.split('@')[1] !== "it.kmitl.ac.th") {
    alert("Please Use it.kmitl Email!")
    return false;
    }if(password == ""){
      alert("Please fill password")
      return false
    }
    if(password != confirmpassword){
      alert("Password and  ConfirmPassword must be the same!") 
      return false
    }else if(username ==""){
      alert("Please fill Username!")
      return false
    }return true
  }
  
  function making_api_call(){
    if(validate_field()){
      alert("Successfully Signup")
      addUser(email, password, username);
      navigation.navigate('Backup')
    }
  }

  return (
    <View style={styles.container}>
      <Image style={{width: 330, height:200, marginTop:50,resizeMode: 'stretch'}} source={require("../../assets/logo.png")}></Image>
      
     
      <View>
        <Text style={{fontSize:22, color:'#fff', textAlign:'center', paddingTop:15, fontWeight:'bold',width:160, height:60, backgroundColor:'#d9001b', marginTop:10}} >Sign Up</Text>

      <TextInput  
      onChangeText={(value) => setEmail(value)}S
      style={styles.Email} keyboardType='email-address' placeholder='xxx@it.kmitl.ac.th' autoCapitalize='none' autoCorrect={false}/>
      <TextInput  
      onChangeText={(value) => setPassword(value)}
      style={styles.Email} keyboardType='default' placeholder='Password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} />
      <TextInput  
      onChangeText={(value) => setConfirmPassword(value)}
      style={styles.Email} keyboardType='default' placeholder='Confirm Password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} />
      <TextInput  
      onChangeText={(value) => setUsername(value)}
      style={styles.Email} keyboardType='default' placeholder='Username' autoCapitalize='none' autoCorrect={false} />
      </View>

      <View style={styles.login} >
  
  
        <TouchableOpacity
        onPress={() => making_api_call() }
        style={{width:110, height:60, backgroundColor:'#000', borderRadius:5, margin:10}} >
        <Text style={{fontSize:16, color:'#fff', textAlign:'center', paddingTop:20, fontWeight:'bold', justifyContent:'center'}} >Sign Up</Text>
      </TouchableOpacity>

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Email:{
    height: 'auto',
    width: 250,
    padding:10,
    fontSize:22,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin:10
  },
  login:{
    flexDirection:'column',
    alignItems: 'center'
    
  }
});

export default SignUp;