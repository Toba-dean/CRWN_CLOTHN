import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CollectionOverview } from "../../components";
import { db, convertCollectionSnapshotToMap } from "../../firebase/firebase";
// import Collection from "../collection";
import { updateCollection } from "../../redux/slices/shop/shopSlice";
import withSpinner from "../../HOC/withSpinner";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)

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
    <>
      <CollectionOverviewWithSpinner isLoading={loading} />
    </>
  )
}

export default ShopPage