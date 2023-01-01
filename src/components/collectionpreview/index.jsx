import { useLocation, useNavigate } from "react-router-dom";

import CollectionItem from "../collectionitem";
import { PreviewCollection, BigText, PreviewContent } from "./collectionpreview.styles";

const CollectionPreview = ({ title, routeName, items }) => {

  const nav = useNavigate();
  const location = useLocation();

  return (
    <PreviewCollection>
      <BigText onClick={() => nav(`${location.pathname}/${routeName}`)}>
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
