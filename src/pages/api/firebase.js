// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getCountFromServer,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC77bRIBYeQ4-LiGBlyg84FyAIQ8v55AfA",
  authDomain: "devtoolproject-bc169.firebaseapp.com",
  projectId: "devtoolproject-bc169",
  storageBucket: "devtoolproject-bc169.appspot.com",
  messagingSenderId: "579724045413",
  appId: "1:579724045413:web:9133dc4c0297ea89c82a8c",
  measurementId: "G-9YCFL8BTWX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const signIn = () => {
  signInWithPopup(auth, provider).then(async (result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = await result.user;
    const q = query(collection(db, "user"), where("email", "==", "user.email"));
    const count = await getCountFromServer(q);
    if (count.data().count == 0) {
      setDoc(doc(db, "user", user.uid), {
        Email: user.email,
      });
    }
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  });
};

export const signOUT = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
