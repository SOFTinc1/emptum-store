import React from "react";
import {
  CheckoutItemMainContainer,
  Table,
  ProductName,
  Price,
  Quantity,
  Total,
  TableBody,
  ImageSrc,
  QuantityDiv2,
  RemoveIcon,
  AddIcon,
  DeleteIcon,
} from "./checkout-item-main.styles";

import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
  // QuantityDiv,
} from "../../redux/cart/cart.actions";

const CheckoutItemMain = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemMainContainer>
      <Table>
        

        <TableBody>
          <ImageSrc src={imageUrl} />
          <ProductName>{name}</ProductName>
          <Price>${price}</Price>
          <QuantityDiv2>
            <RemoveIcon onClick={() => removeItem(cartItem)}/>
            <Quantity>{quantity}</Quantity>
            <AddIcon onClick={() => addItem(cartItem)}/>
          </QuantityDiv2>
          <Total>${price}</Total>
          <DeleteIcon />
        </TableBody>
      </Table>
    </CheckoutItemMainContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItemMain);
