import { getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCdXEutBrquc63lAUPkhcmnV2yscw0K1mE",
    authDomain: "mern-test01.firebaseapp.com",
    databaseURL: "https://mern-test01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mern-test01",
    storageBucket: "mern-test01.appspot.com",
    messagingSenderId: "862288082458",
    appId: "1:862288082458:web:33892dc429b315b4a543a3",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)   // This will check is the app is initialized 

const firestore = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { app, firestore, storage, auth }