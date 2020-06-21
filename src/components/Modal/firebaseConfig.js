import * as firebase from 'firebase/app';
import 'firebase/firestore';


const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBgw3sIh_cgeYwOLzci5A2xAPiIxWTn7dY",
        authDomain: "chill-ecef4.firebaseapp.com",
        databaseURL: "https://chill-ecef4.firebaseio.com",
        projectId: "chill-ecef4",
        storageBucket: "chill-ecef4.appspot.com",
        messagingSenderId: "793972967399",
        appId: "1:793972967399:web:4fe861404f3b80e7addf42",
        measurementId: "G-4R59K56PNS"
    }
);

export {app};