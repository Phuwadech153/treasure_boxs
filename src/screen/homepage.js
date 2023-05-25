import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image, Linking} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Backup')
        }}>
      <MaterialCommunityIcons name="logout" size={50} color="black"style={{marginLeft:350, marginTop:20}} />
      </TouchableOpacity>
      <Image style={{width:380, height:120}} source={require("../../assets/welcome.png")}></Image>

      <View>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('ClassYear')
        }}
        style={{marginTop:10}} >
        <Image style={{ width:150, height:150, marginTop:50}} source={require("../../assets/Lecture.png")}></Image>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}} >Lecture</Text>
      </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('PostViewQa')
        }}
        style={{marginTop:10}} >
        <Image style={{ width:150, height:150, marginTop:10}} source={require("../../assets/QA.png")}></Image>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}} >Q&A</Text>
      </TouchableOpacity>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});

export default HomePage;