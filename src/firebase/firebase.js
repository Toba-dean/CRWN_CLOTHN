// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc, collection, writeBatch } from 'firebase/firestore';

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

// Making the Google sign in
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'prompt': 'select_account'
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;

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

// Sending collection data to fire store (the entire array)
export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  // create a collection in the database with the argument passed
  const collectionRef = collection(db, collectionKey)

  const batch = writeBatch(db);

  // iterate through the array to add to the db, create a document of the collection ref and set with all of the objects in the array.
  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef)

    // this takes the document ref and then the data to add
    batch.set(newDocRef, obj)
  });

  // add all the writes to the db as a single unit
  return await batch.commit();
}

// Getting the SHOP collections from firebase and converting it from an object to an Map
export const convertCollectionSnapshotToMap = collections => {
  // The data to return 
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  // converting to a map of title: { collection }
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});

}