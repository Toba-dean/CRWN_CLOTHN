import CollectionItem from "../collectionitem";
import { PreviewCollection, BigText, PreviewContent } from "./collectionpreview.styles";

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <PreviewCollection>
      <BigText>
        {title}
      </BigText>

      <PreviewContent>
        {
          items.filter((_, idx) => idx < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))
        }
      </PreviewContent>
    </PreviewCollection>
  )
}

export default CollectionPreview
