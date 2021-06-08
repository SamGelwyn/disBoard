import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const app = firebase.initializeApp({


  apiKey: "AIzaSyCn05cBxT-st8YFRpW1H1iVTknPtwVNm6E",
  authDomain: "ngnldisboard-45759.firebaseapp.com",
  databaseURL: "https://ngnldisboard-45759.firebaseio.com",

  projectId: "ngnldisboard-45759",
  storageBucket: "ngnldisboard-45759.appspot.com",
  messagingSenderId: "542026596785",
  appId: "1:542026596785:web:f50651571511873d067d90"
})

export const auth = app.auth()
export const db = app.firestore()
export default app
