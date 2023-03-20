import { getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARQ9O4KBFkpR2hm1ycZ1B1L_FO1JzLK8c",
  authDomain: "itpm-abbfd.firebaseapp.com",
  databaseURL: "https://itpm-abbfd-default-rtdb.firebaseio.com",
  projectId: "itpm-abbfd",
  storageBucket: "itpm-abbfd.appspot.com",
  messagingSenderId: "596175066085",
  appId: "1:596175066085:web:c1c54d34e554fb7098550c",
  measurementId: "G-J3FMKVEFBD"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)   // This will check is the app is initialized 

const firestore = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { app, firestore, storage, auth }