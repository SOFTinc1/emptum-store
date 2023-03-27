import styled, { css } from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";

const TextStyles = css`
  font-family: seren;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 600;

  @media screen and (max-width: 830px) {
    font-size: 18px;
  }

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

export const CheckoutContainer = styled.div`
  width: 100%;
  padding: 0;
`;
export const Head = styled.div`
  font-family: agory;
  font-size: 36px;
  text-transform: capitalize;
  margin: 60px;

  @media screen and (max-width: 830px) {
    margin: 60px 10px;
  }
`;
export const Table = styled.div`
  margin: 40px 0 0 0;
  padding: 0 120px;

  @media screen and (max-width: 830px) {
    padding: 0 10px;
  }
`;
export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 15px;
  align-items: center;
  margin: 0 0 10px 0;

  @media screen and (max-width: 830px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 15px;
  }
`;
export const Image = styled.h1``;
export const ProductName = styled.h1`
  ${TextStyles}
  text-align: center;
`;
export const Price = styled.h1`
  ${TextStyles}
  text-align: center;
`;

export const Quantity = styled.h1`
  ${TextStyles}
  text-align: center;
`;
export const Total = styled.h1`
  ${TextStyles}
  text-align: center;

  @media screen and (max-width: 830px) {
    display: none;
  }
`;
export const Delete = styled.h1`
  ${TextStyles}
  text-align: center;
`;
export const PaymentDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 80px;

  @media screen and (max-width: 830px) {
    display: block;
    padding: 80px 30px;
  }
`;
export const CouponDiv = styled.div`
  padding: 0;
  margin: 40px 0 0 0;
`;
export const Coupon = styled.div`
  ${TextStyles}
  margin: 0 60px;

  @media screen and (max-width: 830px) {
    margin: 10px 0;
  }
`;
export const CouponButtonDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 20px 60px;

  @media screen and (max-width: 830px) {
    margin: 0;
  }
`;
export const CouponCode = styled.div`
  ${TextStyles}
  border: 1px dashed #1d1d1d;
  padding: 10px 20px;
  border-radius: 4px;

  @media screen and (max-width: 830px) {
    margin: 10px 0;
  }
`;
export const ButtonCon = styled(CustomButton)`
  padding: 16px 20px;
`;
export const OrderPaymentDiv = styled.div`
  margin: 0 0 0 auto;

  @media screen and (max-width: 830px) {
    margin: 40px 0 10px 0;
  }
`;
export const Total1 = styled.h1`
  ${TextStyles}
  text-align: left;
`;
export const Total2 = styled.h1`
  ${TextStyles}
  text-align: left;
  margin: 5px 0 0 0;
`;
export const Total3 = styled.h1`
  ${TextStyles}
  margin: 0 0 0 auto;
`;
export const Span = styled.span`
  ${TextStyles}
  text-align: left;
  margin: 0 100px;

  @media screen and (max-width: 830px) {
    margin: 10px 30px;
  }
`;
export const Delivery = styled.h1`
  ${TextStyles}
  text-align: left;
`;
export const Discount = styled.h1`
  ${TextStyles}
  text-align: left;
`;
export const TotalDiv = styled.div`
  display: flex;
  gap: 150px;
  align-items: center;
  border: 1px solid #1d1d1d;
  padding: 10px 20px;
  border-radius: 4px;

  @media screen and (max-width: 830px) {
    margin: 10px;
    gap: 40px;
    padding: 10px;
    width: 230px;
    margin-left: -2px;
  }
`;
