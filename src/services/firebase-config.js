import { getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-NYWBJK97peUg93tC23GU2iAVMITP-a8",
  authDomain: "itpm-02.firebaseapp.com",
  databaseURL: "https://itpm-02-default-rtdb.firebaseio.com",
  projectId: "itpm-02",
  storageBucket: "itpm-02.appspot.com",
  messagingSenderId: "590546768079",
  appId: "1:590546768079:web:b4cfbede4ef4edd469a7ba",
  measurementId: "G-TTNG0D4E58"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)   // This will check is the app is initialized 

const firestore = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { app, firestore, storage, auth }