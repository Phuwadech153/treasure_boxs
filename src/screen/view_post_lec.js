import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image, Linking} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ViewPostLec = ({route, navigation}) => {
  const [year, setYear] = useState(route.params ? route.params.year : "")
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Backup')
        }}>
            <MaterialCommunityIcons name="logout" size={50} color="black"style={{marginLeft:350, marginTop:20}} />

      </TouchableOpacity>
      <Image style={{width:250, height:150,resizeMode: 'stretch'}} source={require("../../assets/logo.png")}></Image>
      <Text style={{ fontSize: 22, color: '#fff', textAlign: 'center', paddingTop: 15, fontWeight: 'bold', width: 160, height: 60, backgroundColor: '#d9001b', marginLeft:-250, marginTop:5}}>Lecture {year}</Text>


      <View>
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('MainLec', {year})
        }}
        >
        <Image style={{ width:120, height:120, marginLeft:15}} source={require("../../assets/view.png")}></Image>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}} >View</Text>
      </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('LecturePost', {year})
        }}
        style={{marginTop:10}} >
        <Image style={{ width:120, height:120, marginTop:10,marginLeft:15}} source={require("../../assets/post.png")}></Image>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}} >Post</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate('ClassYear')
        }}
        style={{width:150, height:50, backgroundColor:'#000', borderRadius:5, marginTop:10, marginBottom:20}} >
          <Text style={{fontSize:20, color:'#fff', textAlign:'center', paddingTop:10, fontWeight:'bold'}} >Back</Text>
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

export default ViewPostLec;
