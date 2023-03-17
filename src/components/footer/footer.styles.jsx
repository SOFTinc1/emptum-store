import styled from "styled-components";
import CartIcon from "../cart-icon/cart-icon.component";
export const FooterContainer = styled.div`
  padding: 10px 40px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  background-color: #eceff1;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 10px 10px;
  }
`;
export const Row = styled.div`
display: grid;
grid-template-columns: 11fr 1fr;
grid-gap: 10px;
`;
export const P = styled.p`
  text-transform: capitalize;
  letter-spacing: 3px;
  font-family: seren;
  font-size: 17px;
  margin: 10px 0 0 0;
  justify-content: flex-start;
  color: #000;
  font-weight: 800;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    margin: 15px 0 0 0;
  }
`;
export const Span = styled.span`
  font-weight: bolder;
`;
export const CartIconContainer = styled(CartIcon)`
  
`;
