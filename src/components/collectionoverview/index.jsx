import CollectionPreview from "../collectionpreview"
import { SHOP_DATA as ShopData } from "./shop.data"

const CollectionOverview = () => {
  return (
    <div>
      {
        ShopData.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))
      }
    </div>
  )
}

export default CollectionOverview
