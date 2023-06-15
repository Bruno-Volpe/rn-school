import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDhxawAirquiF51NGhTkR0X3KxBOjFxIm8',
    authDomain: 'school-61eaa.firebaseapp.com',
    projectId: 'school-61eaa',
    storageBucket: 'school-61eaa.appspot.com',
    messagingSenderId: '539463524038',
    appId: '1:539463524038:web:b2f7666378c5ae56b9c1c7',
    measurementId: 'G-DXSF3R82FS',,
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase