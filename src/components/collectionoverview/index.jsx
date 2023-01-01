import { useSelector } from "react-redux";

import CollectionPreview from "../collectionpreview";
import { SHOP_DATA as ShopData } from "./shop.data";
import { selectCollectionPreview } from "../../redux/slices/shop/shopSlice";

const CollectionOverview = () => {

  const collectionData = useSelector(selectCollectionPreview)
  console.log(collectionData);

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