import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Picker, Image, Linking} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectDropdown from 'react-native-select-dropdown'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';


const ClassYear = ({navigation}) => {
  const [year, setYear] = useState(0)
  return (
    
    <><View style={styles.container}>
       <TouchableOpacity onPress={() => {
          navigation.navigate('Backup')
        }}>
            <MaterialCommunityIcons name="logout" size={50} color="black"style={{marginLeft:350, marginTop:20}} />

      </TouchableOpacity>
      <Image style={{ width: 250, height: 150,resizeMode: 'stretch'}} source={require("../../assets/logo.png")}></Image>
        <Text style={{ fontSize: 22, color: '#fff', textAlign: 'center', paddingTop: 15, fontWeight: 'bold', width: 160, height: 60, backgroundColor: '#d9001b', marginLeft:-250, marginTop:10}}>Lecture</Text>
        <Text style={{ fontSize: 22, color: '#000', textAlign: 'center', fontWeight: 'bold',marginLeft:-100, marginTop:20}}>กรุณาเลือกชั้นปี</Text>
        
        <Picker onValueChange={(year) => {setYear(year)}} label="กรุณาเลือกชั้นปี" style={{ height: 40, width: 240, marginLeft:-10,marginTop:40 }}>
          <Picker.Item label="กรุณาเลือกชั้นปี" value="java"  />
          <Picker.Item label="ปี1" value="1" />
          <Picker.Item label="ปี2" value="2" />
          <Picker.Item label="ปี3" value="3" />
          <Picker.Item label="ปี4" value="4" />
      </Picker>
      <View style={{flexDirection:'row',alignItems:'center', marginTop:'40%'}} > 
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('HomePage')
        }}
        style={{width:150, height:50, backgroundColor:'#000', borderRadius:5, margin:10, marginTop:0, marginBottom:20}} >
          <Text style={{fontSize:20, color:'#fff', textAlign:'center', paddingTop:10, fontWeight:'bold', justifyContent:'center'}} >Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => {
          navigation.navigate('ViewPostLec', {year})
        }}
        style={{width:150, height:50, backgroundColor:'#000', borderRadius:5, margin:10, marginTop:0, marginBottom:20}} >
          <Text style={{fontSize:20, color:'#fff', textAlign:'center', paddingTop:10, fontWeight:'bold', justifyContent:'center'}} >Next</Text>
        </TouchableOpacity>
      </View>
      
    </View>
   


      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
export default ClassYear;
