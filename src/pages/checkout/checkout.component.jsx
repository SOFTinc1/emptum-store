import React from "react";
import {
  CheckoutContainer,
  Head,
  Table,
  TableHead,
  Image,
  ProductName,
  Price,
  Quantity,
  Total,
  Delete,
  PaymentDiv,
  CouponDiv,
  Coupon,
  CouponButtonDiv,
  CouponCode,
  ButtonCon,
  OrderPaymentDiv,
  Total1,
  Total2,
  Total3,
  Delivery,
  Discount,
  TotalDiv,
  Span
} from "./checkout.styles";
import CheckoutItemMain from "../../components/checkout-item-main/checkout-item-main.component";
import Header from "../../components/header/header.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.components";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    <Header />
    <Head className="head">order checkout</Head>
    <Table>
      <TableHead>
        <Image></Image>
        <ProductName>product</ProductName>
        <Price>price</Price>
        <Quantity>pcs</Quantity>
        <Total>price per item</Total>
        <Delete>delete</Delete>
      </TableHead>
      {cartItems.map((cartItem) => (
        <CheckoutItemMain key={cartItem.id} cartItem={cartItem} />
      ))}
    </Table>

    <PaymentDiv>
      <CouponDiv>
        <Coupon>coupon code</Coupon>
        <CouponButtonDiv>
          <CouponCode>hruacv131e3</CouponCode>
          <ButtonCon>enter</ButtonCon>
        </CouponButtonDiv>
        <StripeCheckoutButton />
      </CouponDiv>
      <OrderPaymentDiv>
        <Total1>product total :<Span></Span>${total}</Total1>
        <Delivery>delivery total :<Span></Span>$0.00</Delivery>
        <Discount>discount total :<Span></Span>$0.00</Discount>
         <TotalDiv>
          <Total2>total price :</Total2>
          <Total3>${total}</Total3>
         </TotalDiv>
      </OrderPaymentDiv>
    </PaymentDiv>
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
