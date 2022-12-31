import { useDispatch } from "react-redux";

import CustomButton from "../custombutton";
import {
  ItemContainer, ImageContainer,
  ItemFooter, NameText, PriceText
} from "./collectionitem.styles";
import { addCartItem } from "../../redux/slices/cartSlice";

const CollectionItem = ({ item }) => {

  const { name, imageUrl, price } = item
  const dispatch = useDispatch()

  return (
    <ItemContainer>
      <ImageContainer image={imageUrl} />

      <ItemFooter>
        <NameText>{name}</NameText>
        <PriceText>${price}</PriceText>
      </ItemFooter>

      <CustomButton
        className="custom_button"
        inverted
        onClick={() => {
          dispatch(addCartItem(item))
        }}
      >
        ADD TO CART
      </CustomButton>
    </ItemContainer>
  )
}

export default CollectionItem
