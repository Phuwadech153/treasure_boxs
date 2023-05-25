import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// import screen ที่เกี่ยวข้อง
import Backup from "./src/screen/backup";
import HomePage from "./src/screen/homepage";
import ClassYear from "./src/screen/classyear";
import LecturePost from "./src/screen/lecture_post";
import PostViewQa from "./src/screen/post_view_qa";
import SignUp from "./src/screen/signup";
import ViewPostLec from "./src/screen/view_post_lec";
import QaPost from "./src/screen/QA_post";
import MainQa from './src/screen/mainQA'; 
import QAinfo from './src/screen/QAinfo'; 
import MainLec from './src/screen/mainLec'; 
import Lecinfo from './src/screen/Lecinfo'; 
// สร้าง navigator ตามโจทย์กำหนด
const MainNavigator = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
          screenOptions={{
            headerShown: false
          }}>
        <MainNavigator.Screen name="Backup" component={Backup}/>
        <MainNavigator.Screen name="HomePage" component={HomePage}/>
        <MainNavigator.Screen name="ClassYear" component={ClassYear}/>
        <MainNavigator.Screen name="LecturePost" component={LecturePost}/>
        <MainNavigator.Screen name="PostViewQa" component={PostViewQa}/>
        <MainNavigator.Screen name="QaPost" component={QaPost}/>
        <MainNavigator.Screen name="SignUp" component={SignUp}/>
        <MainNavigator.Screen name="ViewPostLec" component={ViewPostLec}/>
        <MainNavigator.Screen name="MainQa" component={MainQa}/>
        <MainNavigator.Screen name="QAinfo" component={QAinfo}/>
        <MainNavigator.Screen name="MainLec" component={MainLec}/>
        <MainNavigator.Screen name="Lecinfo" component={Lecinfo}/>

      </MainNavigator.Navigator>
    </NavigationContainer>
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
