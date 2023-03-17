import React from "react";
import {
  CartItemContainer,
  CartItemProper,
  ImgSrc,
  ItemDetails,
  DetailsDiv,
  Name,
  Price,
  RemoveItem,
} from "./cart-item.styles";

const CartItem = ({
  item: { imageUrl, price, name, quantity, clearItem,cartItem }
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
        <RemoveItem onClick={() => clearItem(cartItem)}>&#x2613;</RemoveItem>
      </ItemDetails>
    </CartItemProper>
  </CartItemContainer>
);

export default CartItem;
