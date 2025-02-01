import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxpJS79rw1ywSr3v_jS-SRM-gipnVz8B0",
    authDomain: "fir-project-526ce.firebaseapp.com",
    projectId: "fir-project-526ce",
    storageBucket: "fir-project-526ce.firebasestorage.app",
    messagingSenderId: "279323963167",
    appId: "1:279323963167:web:3f6590f9fe99cddc6b4a2a"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth,createUserWithEmailAndPassword,};