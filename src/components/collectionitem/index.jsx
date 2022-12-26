import CustomButton from "../custombutton"
import {
  ItemContainer, ImageContainer,
  ItemFooter, NameText, PriceText
} from "./collectionitem.styles"

const CollectionItem = ({ item }) => {

  const { name, imageUrl, price } = item

  return (
    <ItemContainer>
      <ImageContainer image={imageUrl} />

      <ItemFooter>
        <NameText>{name}</NameText>
        <PriceText>${price}</PriceText>
      </ItemFooter>

      <CustomButton inverted className="custom_button">
        ADD TO CART
      </CustomButton>
    </ItemContainer>
  )
}

export default CollectionItem
