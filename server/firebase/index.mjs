/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDIctKKMfzoh3L3gppgdVTjHtWGndHQkBE",
   authDomain: "cake-fairy-122cf.firebaseapp.com",
   projectId: "cake-fairy-122cf",
   storageBucket: "cake-fairy-122cf.appspot.com",
   messagingSenderId: "368434051481",
   appId: "1:368434051481:web:181b9ee5eaeee95439fb08",
   measurementId: "G-40ZLXRSN4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const uploadImage = async (file) => {
   const storage = getStorage();
   const filename = Date.now().toString();
   const location = `cakeimages/${filename}`;
   const imageStorageRef = ref(storage, location);

   const metadata = {
      contentType: file.mimetype,
   };

   const response = await uploadBytes(imageStorageRef, file.data, metadata);
   console.log("response: ", response);
  

   const downloadUrl = await getDownloadURL(ref(storage, location));
   return downloadUrl;
};
