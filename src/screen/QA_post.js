import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectDropdown from "react-native-select-dropdown";
import AntIcon from "react-native-vector-icons/AntDesign";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addQA } from "../../firebase";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { FontAwesome5 } from "@expo/vector-icons";
import { addfile } from "../../firebase";
import { addimage } from "../../firebase";

const QaPost = ({ navigation }) => {
  const [main, setMain] = useState("");
  const [text, setText] = useState("");
  const [comment, setcomment] = useState("");
  const [user, setUser] = useState("");
  const [fileUpload, setFile] = useState([]);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: "image/jpeg",
    });
    setFile(result);
    alert("Upload Image Complete!");
    console.log(fileUpload);
  };

  function validate_field() {
    if (main == "" && text == "") {
      alert("Please fill in the information!");

      return false;
    } else if (main == "" || text == "") {
      alert("Please fill in the missing information!");
      return false;
    } else {
      return true;
    }
  }

  // function urlToBlob(url) {
  //   return new Promise((resolve, reject) => {
  //     var xhr = new XMLHttpRequest();
  //     xhr.onerror = reject;
  //     xhr.onreadystatechange = () => {
  //       if (xhr.readyState === 4) {
  //         resolve(xhr.response);
  //       }
  //     };
  //     xhr.open("GET", url);
  //     xhr.responseType = "blob"; // convert type
  //     xhr.send();
  //   });
  // }

  const uploadFile = async () => {
    // if (fileUpload.uri) {
    try {
      let blob = null;
      if (fileUpload.uri) {
        const fetchResponse = await fetch(fileUpload.uri);
        blob = await fetchResponse.blob();
        // blob = await urlToBlob(fileUpload.uri);
      }
      const title = {
        description: main,
        text: text,
        comment: comment,
        user: user,
        // year: 0
      };
      addimage(blob, title);
      // navigation.navigate("MainQa");
    } catch (error) {
      console.log("ERR: " + error);
    }
    // } else {
    //   alert("Please Upload File");
    // }
  };

  function confirm() {
    if (validate_field()) {
      // addQA(main, text, user,  comment, 0);
      uploadFile();
      alert("Question is post!");
      // navigation.navigate('MainQa')
    } else {
      alert("Invalidate");
    }
  }

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
            style={{ marginLeft: 350, marginTop: 20 }}
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
          Q&A
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: "#000",
            textAlign: "center",
            fontWeight: "bold",
            marginLeft: -200,
            marginTop: 20,
          }}
        >
          หัวข้อ
        </Text>
        <TextInput
          onChangeText={(value) => setMain(value)}
          style={styles.Email}
          keyboardType="default"
          placeholder="วิชาxxx ยากมั้ยคะ"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <TextInput
              onChangeText={(value) => setText(value)}
              multiline={true}
              placeholder="Say something..."
              style={{
                height: 100,
                width: 248,
                textAlignVertical: "top",
                borderWidth: 1,
                marginTop: 10,
                marginLeft: 1,
              }}
            />
          </ScrollView>
        </SafeAreaView>
        <TouchableOpacity
          onChangeT
          onPress={pickDocument}
          style={{
            width: 248,
            height: 80,
            borderColor: "black",
            borderWidth: 1,
            position: "absolute",
            top: "75%",
          }}
        >
          <View style={{ padding: 5 }}>
            <FontAwesome5
              name="file-image"
              size={30}
              color="black"
              style={{ textAlign: "center", padding: 10 }}
            />
            <Text
              style={{ fontWeight: "bold", textAlign: "center", fontSize: 16 }}
            >
              Drop Image
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PostViewQa");
            }}
            style={{
              width: 150,
              height: 50,
              backgroundColor: "#000",
              borderRadius: 5,
              margin: 10,
              marginTop: 0,
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
            onPress={() => confirm()}
            style={{
              width: 150,
              height: 50,
              backgroundColor: "#000",
              borderRadius: 5,
              margin: 10,
              marginTop: 0,
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

export default QaPost;
