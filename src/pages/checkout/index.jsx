import { useSelector } from "react-redux";

import { 
  CheckOutContainer, CheckOutHeader, 
  HeaderBlock, SpanText, Total
} from "./checkout.styles";
import { selectCartItem } from "../../redux/slices/cartSlice";
import { CheckOutItem } from "../../components";
import CustomButton from "../../components/custombutton";

const CheckOutPage = () => {

  const cartItems = useSelector(selectCartItem);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <SpanText>Products</SpanText>
        </HeaderBlock>

        <HeaderBlock>
          <SpanText>Description</SpanText>
        </HeaderBlock>

        <HeaderBlock>
          <SpanText>Quantity</SpanText>
        </HeaderBlock>

        <HeaderBlock>
          <SpanText>Price</SpanText>
        </HeaderBlock>

        <HeaderBlock>
          <SpanText>Remove</SpanText>
        </HeaderBlock>
      </CheckOutHeader>

      {
        cartItems.map(item => (
          <CheckOutItem key={item.id} item={item} />
        ))
      }

      <Total>
        <SpanText>TOTAl: $200</SpanText>
      </Total>

      <CustomButton inverted>
        Pay Now
      </CustomButton>
    </CheckOutContainer>
  )
}

export default CheckOutPage
