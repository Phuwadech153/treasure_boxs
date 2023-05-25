import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image  } from 'react-native';
import { FaUserAlt } from "react-icons/fa";
import { useState } from 'react';
import { getStudents } from '../../firebase';

const Backup = ({navigation}) => {

  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  function validate_field(){
    if(studentId == "" && password == ""){
      alert("Please fill Email and Password!")
      
      return false
    }else if(studentId ==""){
      alert("Please fill Email!")
      return false
    } else if(studentId.split('@')[1] !== "it.kmitl.ac.th"){
      alert("Email is Not Correct Please Use it.kmitl Email!")
      return false;
    }else if(password ==""){
      alert("Please fill Password!")
      return false
    }return true
  }

  async function making_api_call(){
    if(validate_field()){
      const student = await getStudents(studentId,password)
      if(student){
        alert("Successfully login")
        navigation.navigate('HomePage')
      }else{
        alert ("Email or Password is incorrect!")
      }
    }
  }

  return (
    

    <View style={styles.container}>
      <Image style={{width: 330, height:200, marginTop:60,resizeMode: 'stretch'}} source={require("../../assets/logo.png")}></Image>
      <Text style={{fontWeight:'bold', fontSize: 30, marginTop:30, marginBottom:20}} >Welcome!</Text>

      <View>
        
      <TextInput  
      onChangeText={(value) => setStudentId(value)}
      style={styles.Email} keyboardType='email-address' placeholder={'xxx@it.kmitl.ac.th'} autoCapitalize='none' autoCorrect={false}/>
      <TextInput  
      onChangeText={(value) => setPassword(value)}
      style={styles.Email} keyboardType='default' placeholder='Password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} />
      </View>

      <View style={styles.login} >
  
        <TouchableOpacity 
        
        style={{width:160, height:60, backgroundColor:'#d9001b', borderRadius:5, margin:10}} >
        <Text 
        onPress={() => making_api_call() }
        style={{fontSize:22, color:'#fff', textAlign:'center', paddingTop:15, fontWeight:'bold'}} >Sign In</Text>
      </TouchableOpacity>
  
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp')
        }}
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
    marginTop:30,
    alignItems: 'center'
    
  }
});

export default Backup;