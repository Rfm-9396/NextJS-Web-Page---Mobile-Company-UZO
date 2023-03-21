import { getApp, getApps, initializeApp  } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvvreqWqT-jZLAYKdfm9cXaicK0_GAi2c",
  authDomain: "chatgpt-8b675.firebaseapp.com",
  projectId: "chatgpt-8b675",
  storageBucket: "chatgpt-8b675.appspot.com",
  messagingSenderId: "1024278695716",
  appId: "1:1024278695716:web:94eaecbbbd66a7262eedb1"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };