import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCrDlWRcgDpSEo-hJV1xunTxcir6Xs-LJ8",
  databaseURL: "https://timesheet-v2-3d8bf-default-rtdb.europe-west1.firebasedatabase.app/",
  authDomain: "timesheet-v2-3d8bf.firebaseapp.com",
  projectId: "timesheet-v2-3d8bf",
  storageBucket: "timesheet-v2-3d8bf.appspot.com",
  messagingSenderId: "433441940327",
  appId: "1:433441940327:web:dff6d6d9b2eadb26e045c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
