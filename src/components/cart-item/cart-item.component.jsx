import React from "react";
import {
  CartItemContainer,
  CartItemProper,
  ImgSrc,
  ItemDetails,
  DetailsDiv,
  Name,
  Price,
} from "./cart-item.styles";

const CartItem = ({
  item: { imageUrl, price, name, quantity }
}) => (
  <CartItemContainer>
    <CartItemProper>
      <ImgSrc src={imageUrl} alt="item" />
      <ItemDetails>
        <DetailsDiv>
          <Name>{name}</Name>
          <br />
          <Price>
            {" "}
            {quantity} X ${price}
          </Price>
        </DetailsDiv>
      </ItemDetails>
    </CartItemProper>
  </CartItemContainer>
);

export default CartItem;
