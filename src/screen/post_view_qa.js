import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image, Linking} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const PostViewQa = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Backup')
        }}>
            <MaterialCommunityIcons name="logout" size={50} color="black"style={{marginLeft:350, marginTop:20}} />

      </TouchableOpacity>
      <Image style={{width:250, height:150,resizeMode: 'stretch'}} source={require("../../assets/logo.png")}></Image>
      <Text style={{ fontSize: 22, color: '#fff', textAlign: 'center', paddingTop: 15, fontWeight: 'bold', width: 160, height: 60, backgroundColor: '#d9001b', marginLeft:-250, marginTop:5}}>Q&A</Text>


      <View>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('MainQa')
        }}
        style={{marginTop:10}} >
        <Image style={{ width:120, height:120, marginTop:10,marginLeft:15 }} source={require("../../assets/view.png")}></Image>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}} >View</Text>
      </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('QaPost')
        }}
        style={{marginTop:10}} >
        <Image style={{ width:120, height:120, marginTop:10,marginLeft:15 }} source={require("../../assets/post.png")}></Image>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}} >Post</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate('HomePage')
        }}
        style={{width:150, height:50, backgroundColor:'#000', borderRadius:5, marginTop:10}} >
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

export default PostViewQa;