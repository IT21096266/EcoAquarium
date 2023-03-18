import { getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB1rmcRY5JYwfU1tBk91m3y6T9LSg5zVmk",
    authDomain: "ecoaquarium-edce8.firebaseapp.com",
    databaseURL: "https://ecoaquarium-edce8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ecoaquarium-edce8",
    storageBucket: "ecoaquarium-edce8.appspot.com",
    messagingSenderId: "873471183232",
    appId: "1:873471183232:web:97d47f05014ac8c6345965"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)   // This will check is the app is initialized 

const firestore = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { app, firestore, storage, auth }