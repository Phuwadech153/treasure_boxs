import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView, TextInput, Button,TouchableOpacity, Picker, Image, FlatList} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectDropdown from 'react-native-select-dropdown'
import AntIcon from "react-native-vector-icons/AntDesign";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { useState, useEffect } from 'react';

import {db } from "../../firebase";


const MainLec = ({route, navigation}) => {
  const [data, setData] = useState();
  const [year, setYear] = useState(route.params ? parseInt(route.params.year) : "")
  console.log("----------------------------------------ssssss-------------------");
  useEffect(() => {
    // getStudents().then((data2) => {
      //   // console.log(data)
      //   setData(data2);
      // });
      console.log(year)
      const q = query(collection(db, "pdfStorage"), where("year", "==", year));
      let arr = [];
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arr.push({...doc.data(), uid: doc.id});
        });
        setData(arr);
      });
      
      // const unsub = onSnapshot(collection(db, "pdfStorage"), (docs) => {
      //   let arr = [];
      //   docs.forEach((doc) => {
          
      //     arr.push({...doc.data(), uid: doc.id});
      //     // console.log(1111,doc.data())
      //   });
      //   setData(arr);
      // //   console.log(1111111111111111111111111111111,arr)
      // });
  
      return () => {
        // unsub();
        unsubscribe()
      };
    }, []);
  //   console.log(data);

    const renderItem = (itemData) => {
      // console.log(11,itemData.item);
      let item = itemData.item;
      return (
        <TouchableOpacity
        onPress={() => {
            navigation.navigate("Lecinfo", {description: item.description,locationFile:item.locationFile})
        }}
          style={{
            width: "100%",
            height: 'auto',
            backgroundColor: "white",
            justifyContent: "center",
            padding:20,
            marginTop:15,
            borderRadius:15,
            backgroundColor:'#DCDCDC'
          }}
          
        >
          <Text style={{fontSize:18, fontWeight:'bold'}} >{item.description}</Text>
        </TouchableOpacity>
      );
    };
  
  
    return (
      <View style={styles.container}>
           <TouchableOpacity onPress={() => {
          navigation.navigate('Backup')
        }}>
            <MaterialCommunityIcons name="logout" size={50} color="black"style={{marginLeft:350, marginTop:20}} />

      </TouchableOpacity>
      <Image style={{ width: 250, height: 150,resizeMode: 'stretch',}} source={require("../../assets/logo.png")}></Image>
        <Text style={{ fontSize: 22, color: '#fff', textAlign: 'center', paddingTop: 15, fontWeight: 'bold', width: 160, height: 60, backgroundColor: '#d9001b', marginLeft:-250, marginTop:5}}>Lecture {year}</Text>
        
        <FlatList
          data={data}
          style={{ width: "80%" }}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.uid}
        />

        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('ViewPostLec')
        }}
        style={{width:150, height:50, backgroundColor:'#000', borderRadius:5,position:'absolute',bottom:20, left:130}} >
          <Text style={{fontSize:20, color:'#fff', textAlign:'center', paddingTop:10, fontWeight:'bold', justifyContent:'center'}} >Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(245,245,245,1)",
      alignItems: "center"
      // justifyContent: 'center',
    }
  });
// const MainQa = ({navigation}) => {
//   return (
//     <><View style={styles.container}>
//       <TouchableOpacity onPress={() => {
//           navigation.navigate('Backup')
//         }}>
//             <MaterialCommunityIcons name="logout" size={50} color="black"style={{marginLeft:350, marginTop:20}} />

//       </TouchableOpacity>
//       <Image style={{ width: 250, height: 150,resizeMode: 'stretch',}} source={require("../../assets/logo.png")}></Image>
//         <Text style={{ fontSize: 22, color: '#fff', textAlign: 'center', paddingTop: 15, fontWeight: 'bold', width: 160, height: 60, backgroundColor: '#d9001b', marginLeft:-250, marginTop:5}}>Q&A</Text>
        
//       <View style={{flexDirection:'row',alignItems:'center'}} >
//         <TouchableOpacity 
//         onPress={() => {
//           navigation.navigate('PostViewQa')
//         }}
//         style={{width:150, height:50, backgroundColor:'#000', borderRadius:5,position:'absolute',top:320, left:-70}} >
//           <Text style={{fontSize:20, color:'#fff', textAlign:'center', paddingTop:10, fontWeight:'bold', justifyContent:'center'}} >Back</Text>
//         </TouchableOpacity>

//       </View>
//     </View>

//       </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   Email:{
//     height: 'auto',
//     width: 250,
//     padding:5,
//     fontSize:18,
//     borderColor: 'black',
//     borderWidth: 1,
//     margin:10
//   },
 
// });

export default MainLec;
