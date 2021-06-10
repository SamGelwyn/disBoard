import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const app = firebase.initializeApp({

  
  apiKey: "AIzaSyD5Rv3t-japBRlAZqYqB_mEGRXDs8QHIbc",
  authDomain: "disboard-b79f2.firebaseapp.com",
  databaseURL: "https://disboard-b79f2.firebaseio.com",
  projectId: "disboard-b79f2",
  storageBucket: "disboard-b79f2.appspot.com",
  messagingSenderId: "42344056741",
  appId: "1:42344056741:web:2973773bdaf96ac3c9ca4c"

})

export const auth = app.auth()
export const db = app.firestore()
export default app
