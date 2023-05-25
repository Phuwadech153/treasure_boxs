import React, {useEffect, useState} from 'react';
import { StyleSheet,Dimensions, Content, Text, View, Image, TextInput, Button,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { updateComment, deleteStudent } from '../../firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Pdf from 'react-native-pdf';
import PDFReader from 'rn-pdf-reader-js'

export default function Lecinfo({route}) {
  let link1 = "https://firebasestorage.googleapis.com/v0/b/mobile64-lecture13-835e2.appspot.com/o/";
  let link2 = route.params.locationFile;
  let link3 = "?alt=media&token=";
  let link4 = "?efe4413d-8e74-40f1-b536-bb91107c5230";

//     console.log(route.params.locationFile)
//     const links = route.params.locationFile
  return (
  

  <PDFReader
  source={{
  uri: link1 + link2 + link3+link4,
  }}
    />
    // <Content>
    //     {route.params.locationFile.fileType == "application/pdf" && (
    //       <Pdf
    //       source={{uri: route.params.locationFile.fileURL}}
    //       style={{
    //         flex:1,
    //         width:Dimensions.get('window').width,
    //         height:Dimensions.get('window').height,

    //       }}
    //       resizeMode={'Content'}
          
    //       />
    //     )}
    // </Content>
    // <Content>
    //     {route.params.locationFile.fileType == "application/pdf" && (
    //       <Pdf
    //       source={{uri: route.params.locationFile.fileURL}}
    //       style={{
    //         flex:1,
    //         width:Dimensions.get('window').width,
    //         height:Dimensions.get('window').height,

    //       }}
    //       resizeMode={'Content'}
          
    //       />
    //     )}
    // </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    padding: '10%'
  },
});
