import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Picker,
  Image,
  Linking,
  startsWith,
  isCancel,
  pick,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectDropdown from "react-native-select-dropdown";
import AntIcon from "react-native-vector-icons/AntDesign";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { FontAwesome5 } from "@expo/vector-icons";
import { addfile } from "../../firebase";
import { decode } from "@firebase/util";
// import DocumentPicker from 'react-native-document-picker';
import { getStorage, ref, updateMetadata } from "firebase/storage";

const LecturePost = ({ route, navigation }) => {
  const [year, setYear] = useState(route.params ? parseInt(route.params.year) : "")
  const [fileUpload, setFile] = useState([]);
  const [main, setMain] = useState("");
  const [subject, setSubject] = useState("");

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: "application/pdf",
    });
    setFile(result);
    alert("Upload SuccessFully!")

  };

  const uploadFile = async () => {
    // if (fileUpload.uri) {
      try {
        const fetchResponse = await fetch(fileUpload.uri);
        const blob = await fetchResponse.blob();
        const title = {
          subject,
          description: main,
          year,
        };
        addfile(blob, title);
        alert("COMPLETE UPLOAD!")
        navigation.navigate("ViewPostLec", {year});
      } catch (error) {
        console.log("ERR: " + error);
      }
    // } else {
    //   alert("Please Upload File");
    // }
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Backup");
          }}
        >
          <MaterialCommunityIcons
            name="logout"
            size={50}
            color="black"
            style={{ marginLeft: 350, marginTop: 10 }}
          />
        </TouchableOpacity>
        <Image
          style={{ width: 250, height: 150, resizeMode: "stretch" }}
          source={require("../../assets/logo.png")}
        ></Image>
        <Text
          style={{
            fontSize: 22,
            color: "#fff",
            textAlign: "center",
            paddingTop: 15,
            fontWeight: "bold",
            width: 160,
            height: 60,
            backgroundColor: "#d9001b",
            marginLeft: -250,
            marginTop: 5,
          }}
        >
          Lecture {year}
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: "#000",
            textAlign: "center",
            fontWeight: "bold",
            marginLeft: -200,
            marginTop: 10,
          }}
        >
          หัวข้อ
        </Text>
        <TextInput
          onChangeText={(value) => setMain(value)}
          style={styles.Email}
          keyboardType="default"
          placeholder="กรอกหัวข้อ"
          autoCapitalize="none"
          autoCorrect={false}
        />
        

        {/* <TouchableOpacity>
        <Text onPress={() => openDocumentFile() } >test</Text>
      </TouchableOpacity> */}
        <TouchableOpacity
          onChangeT
          onPress={pickDocument}
          style={{ width: 248,height:150, borderColor: "black", borderWidth: 1 }}
        >
          <View style={{ padding: 5 }}>
            <FontAwesome5
              name="file-upload"
              size={50}
              color="black"
              style={{ textAlign: "center", padding:30 }}
            />
            <Text
              style={{ fontWeight: "bold", textAlign: "center", fontSize: 16 }}
            >
              Drop File
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", position:'absolute', top:'80%' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ViewPostLec");
            }}
            style={{
              width: 150,
              height: 50,
              backgroundColor: "#000",
              borderRadius: 5,
              margin: 10,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
                paddingTop: 10,
                fontWeight: "bold",
                justifyContent: "center",
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: "#000",
              borderRadius: 5,
              margin: 10,
              marginBottom: 20,
            }}
            onPress={uploadFile}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
                paddingTop: 10,
                fontWeight: "bold",
                justifyContent: "center",
              }}
            >
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Email: {
    height: "auto",
    width: 250,
    padding: 5,
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
});

export default LecturePost;
