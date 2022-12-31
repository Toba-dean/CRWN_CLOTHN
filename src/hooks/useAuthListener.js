import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { auth, createUserProfile } from "../firebase/firebase";
import { addUser, selectUser } from "../redux/slices/userSlice";


export const useAuthListener = userAuth => {

  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser)
  const [user, setUser] = useState(currentUser)

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        onSnapshot(userRef, snapShot => {
          setUser(
            dispatch(
              addUser({
                id: snapShot.id,
                ...snapShot.data()
              })
            )
          )
        })
      }
    })
    return () => listener();
  }, [dispatch])

  return user;
}