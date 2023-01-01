import { useSelector } from "react-redux";

import { 
  CheckOutContainer, CheckOutHeader, 
  HeaderBlock, SpanText, Total, PayButton 
} from "./checkout.styles";
import { selectCartItem } from "../../redux/slices/cartSlice";
import { CheckOutItem } from "../../components";

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

      <PayButton>
        Pay Now
      </PayButton>
    </CheckOutContainer>
  )
}

export default CheckOutPage
