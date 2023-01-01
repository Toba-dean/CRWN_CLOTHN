import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { CollectionOverview } from "../../components";
import { db, convertCollectionSnapshotToMap } from "../../firebase/firebase";
import Collection from "../collection";
import { updateCollection, selectCollection } from "../../redux/slices/shop/shopSlice";
import withSpinner from "../../HOC/withSpinner";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

const ShopPage = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dispatchCollection = () => {
      const collectionRef = collection(db, "collections");

      onSnapshot(collectionRef, async snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot)

        dispatch(updateCollection(collectionsMap))
        setLoading(false)
      })
    }
    dispatchCollection()
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CollectionOverviewWithSpinner isLoading={loading} />} />
      <Route path="/:collectionId" element={<CollectionWithSpinner isLoading={loading} />} />
    </Routes>
  )
}

export default ShopPage