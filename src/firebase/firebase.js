// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSKZNDK0kktOV5EaLZIr9w99semDa0Vv0",
  authDomain: "crwn-clothn.firebaseapp.com",
  projectId: "crwn-clothn",
  storageBucket: "crwn-clothn.appspot.com",
  messagingSenderId: "938757062599",
  appId: "1:938757062599:web:082264fd7a73fa799a23e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase storage
export const db = getFirestore(app)

// Initialize authorization
export const auth = getAuth(app);

// save user data in the fire store db
export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toISOString();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }
  return userRef;
}

// Making the Google sign in
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'prompt': 'select_account'
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;