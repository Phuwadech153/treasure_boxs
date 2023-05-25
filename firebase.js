
import * as firebase from "firebase/compat";
import fb, { initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytes, updateMetadata, getDownloadURL } from "firebase/storage";
import {
    getFirestore,
    setDoc,
    doc,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc
  } from "firebase/firestore";
import { useEffect } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyCA9FNCN9kHGS9fUTCah67d_zdukeS40Cc",
    authDomain: "mobile64-lecture13-835e2.firebaseapp.com",
    projectId: "mobile64-lecture13-835e2",
    storageBucket: "mobile64-lecture13-835e2.appspot.com",
    messagingSenderId: "718341432032",
    appId: "1:718341432032:web:02e38819f466b236c1e685",
    measurementId: "G-R6DNP3CB47"
  };

firebase.initializeApp(firebaseConfig);


export default firebase;

const storage = getStorage();

const firestore = getFirestore();

export const db = getFirestore();



export async function addUser(email, password, username) {
  try {
    if (email == "" && password == "" && username === "") {
      console.log("no data");
    } else {
      const docRef = await addDoc(collection(firestore, "signup"), {
        email,
        password,
        username
      });
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (err) {
    console.log("Error addStudents ", err);
  }
}

export async function getStudents(email, password) {
    let found = false;
    const querySnapshot = await getDocs(collection(firestore, "signup"));
    await querySnapshot.forEach((doc) => {
      // console.log(doc._document.data.value.mapValue.fields.email.stringValue);
      // console.log(doc._document.data.value.mapValue.fields.password.stringValue);
      if(email === doc._document.data.value.mapValue.fields.email.stringValue && password === doc._document.data.value.mapValue.fields.password.stringValue){
          found = true
          console.log("Success login")
      }
    }
    );
    if(found){
      return true
    }else{
      return false
    }
    // console.log(dataList)
  }

  export async function addQA(main, text,user, comment) {
    try {
      if (!main && !text) {
        console.log("no data");
      } else {
        const docRef = await addDoc(collection(firestore, "Q&A"), {
          main,
          text,
          user,
          comment,
        });
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (err) {
      console.log("Error addStudents ", err);
    }
  }

export function updateComment(uid ,user, comment) {
  return new Promise(async (resolve, reject) => {
    try {
      const docRef = doc(db, "pdfStorage", uid);
      // Set the "capital" field of the city 'DC'
      await updateDoc(docRef, {
        user,
        comment,
      }).then(() => {
        resolve(true)
      })
      .catch((e) => {
        reject(e)
      })
    } 
    catch (err) {
      console.log(err);
      reject(err)
    }
  })
}
 




  async function createFileStorage(data){
    try{
      await addDoc(collection(firestore, "pdfStorage"), {
        subject: data.subject || "no",
        description: data.description || "no",
        locationFile: data.locationFile || null,
        year: data.year
      })
    }
    catch(err){
      console.log(err)
    }

  }
  async function createFileStorage2(data){
    try{
      await addDoc(collection(firestore, "pdfStorage"), {
        ...data
      })
    }
    catch(err){
      console.log(err)
    }

  }

  // export async function updateComment(uid, studentID, name, gpa) {
  //   try {
  //     const docRef = doc(db, "students", uid);
  //     // Set the "capital" field of the city 'DC'
  //     await updateDoc(docRef, {
  //       studentID,
  //       name,
  //       gpa
  //     });
  //     console.log('update success')
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

export async function addfile(blob, title) {
  const getUniqueName = `${new Date().getTime()}.pdf`
  const storageRef = ref(storage, getUniqueName);
  const data = {
    subject: title.subject,
    description: title.description,
    locationFile: getUniqueName,
    year: title.year
  }
  try {
    uploadBytes(storageRef, blob).then(() => {
      createFileStorage(data)
    });
    } catch (err) {
      console.log("Error add PDF ", err);
    }
  }

export async function addimage(blob, title) {
  console.log(title)
  console.log(blob)
  const getUniqueName = `${new Date().getTime()}.pdf`
  const storageRef = ref(storage, getUniqueName);
  const data = {
    description: title.description,
    text:title.text,
    comment: title.comment,
    user:title.user,
    locationFile: blob ? getUniqueName : null
  }
  try {
    uploadBytes(storageRef, blob).then(() => {
      createFileStorage2(data)
    });
    } catch (err) {
      console.log("Error add PDF ", err);
    }

  }

export function readPDF(pdfName){

  getDownloadURL(ref(storage, pdfName))
  return new Promise((resolve, reject) => {
    getDownloadURL(ref(storage, pdfName))
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();      
      // Or inserted into an <img> element
      return(url)
      console.log("read UrL");
    })
    .catch(() => {
      reject(false)
      console.log("cant read UrL")

    });
  })
  }
