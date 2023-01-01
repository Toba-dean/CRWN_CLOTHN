import { useSelector } from "react-redux";

import CollectionPreview from "../collectionpreview";
import { selectCollectionPreview } from "../../redux/slices/shop/shopSlice";

const CollectionOverview = () => {

  const collectionData = useSelector(selectCollectionPreview);

  return (
    <div>
      {
        collectionData.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))
      }
    </div>
  )
}

export default CollectionOverview