import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Container, BigText, ItemContainer } from "./collection.styles";
import { selectCollection } from "../../redux/slices/shop/shopSlice";
import { CollectionItems } from "../../components";

const Collection = () => {

  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection

  return (
    <Container>
      <BigText>{title}</BigText>

      <ItemContainer>
        {
          items.map(item => (
            <CollectionItems key={item.key} item={item} />
          ))
        }
      </ItemContainer>
    </Container>
  )
}

export default Collection