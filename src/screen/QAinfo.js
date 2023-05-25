import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { updateComment, deleteStudent } from '../../firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function QAinfo({navigation, route}) {

    console.log(route.params)
    const [main, setMain] = useState(route.params.main)
    const [text, setText] = useState(route.params.text)
    const [uid, setUID] = useState(route.params.uid)
    const [comment, setComment] = useState('');
    const [user, setUser] = useState('');
    const [comments, setComments] = useState(route.params.comment)
    const [users, setUsers] = useState(route.params.user)

    function validate_field(){
      if(user == "" && comment == ""){
        alert("Please fill in the information!")
        
        return false
      }else if(user == "" || comment == ""){
        alert("Please fill in the missing information!")
        return false
      }else{
        return true
      }
    }

    async function confirm(){
      if(validate_field()){
        // updateComment(uid, user, comment);
        await updateComment(uid, user, comment)
        .then(() => {
          setComments(comment)
          setUsers(user)
        })
      }
    }

    const ImagePhoto = () => {
      let link1 = "https://firebasestorage.googleapis.com/v0/b/mobile64-lecture13-835e2.appspot.com/o/";
      let link2 = route.params.locationFile;
      let link3 = "?alt=media&token=?efe4413d-8e74-40f1-b536-bb91107c5230";
    
      const link = link1+link2+link3;
      if(route.params.locationFile){
        return <Image style = {{height: 200, resizeMode : 'stretch', margin: 5 }} source={{uri: link}}/>
      }
      else{
        return false
      }
    }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop:20}}>
        <Text style={{ fontSize: 22, color: '#fff', textAlign: 'center', paddingTop: 15, fontWeight: 'bold', width: 160, height: 60, backgroundColor: '#d9001b'}}>Q&A</Text>
      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Backup')
      }}>
            <MaterialCommunityIcons name="logout" size={50} color="black" />
      </TouchableOpacity>
      </View>
        <ScrollView style={{padding: '10%'}}>
        <View style={{marginTop: 10,backgroundColor:'#DCDCDC',padding:10, borderRadius:5}}>
          <Text style={{fontSize:28, fontWeight:'bold'}} >{main}</Text>
          <Text style={{fontSize:20, marginLeft:10}} >{text}</Text>
          <ImagePhoto/>
        </View>
        
        <View>
          <Text style={{fontSize:32, fontWeight:'bold'}} >Comment</Text>
        </View>
        <View style={{padding:10, borderRadius:5}}>
          <Text style={{fontSize:28, fontWeight:'bold'}}  >{users}</Text>
          <Text style={{fontSize:20, marginLeft:10}} >{comments}</Text>
        </View>
        
        <View>
        <TextInput  
      onChangeText={(value) => setUser(value)}
      style={{padding:5,margin:5, fontSize:16, borderRadius:5, borderWidth:1, borderColor:'#DCDCDC'}} keyboardType='default' placeholder={'username'} autoCapitalize='none' autoCorrect={false}/>
        <SafeAreaView>
      <ScrollView style={styles.scrollView}>
      <TextInput 
      onChangeText={(value) => setComment(value)}
      multiline={true} placeholder='Comment...'  returnKeyType={ "next" } style={{ height:80,width:320, textAlignVertical: 'top',padding:5,margin:5, fontSize:16, borderRadius:5, borderWidth:1, borderColor:'#DCDCDC'}}/>
          
      </ScrollView>
    </SafeAreaView>
        </View>
        <View style={{flexDirection:'row',alignItems:'center', marginBottom: 50}} >
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('MainQa')
        }}
        style={{width:150, height:50, backgroundColor:'#000', borderRadius:5, margin:10}} >
          <Text style={{fontSize:20, color:'#fff', textAlign:'center', paddingTop:10, fontWeight:'bold', justifyContent:'center'}} >Back</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => confirm() }
        style={{width:150, height:50, backgroundColor:'#000', borderRadius:5, margin:10}} >
          <Text style={{fontSize:20, color:'#fff', textAlign:'center', paddingTop:10, fontWeight:'bold', justifyContent:'center'}} >Confirm</Text>
        </TouchableOpacity>
      </View>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
});
