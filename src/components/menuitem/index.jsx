import { useNavigate } from "react-router-dom";

import { 
  MenuContainer, ImageContainer, 
  ContentContainer, BigText, SpanText 
} from "./menuitem.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {

  const navigate = useNavigate();

  return (
    <MenuContainer size={size} onClick={() => navigate(`${linkUrl}`)}>
      <ImageContainer image={imageUrl} />

      <ContentContainer>
        <BigText>{title.toUpperCase()}</BigText>

        <SpanText>Shop Now</SpanText>
      </ContentContainer>
    </MenuContainer>
  )
}

export default MenuItem