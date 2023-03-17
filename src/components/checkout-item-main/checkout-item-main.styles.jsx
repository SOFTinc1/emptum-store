import styled, { css } from "styled-components";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";

const TextStyles = css`
  font-family: seren;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 830px) {
    font-size: 18px;
  }
`;

export const CheckoutItemMainContainer = styled.div``;

export const Table = styled.div`
margin: 0;
`;
export const ProductName = styled.h1`
  ${TextStyles}
`;
export const Price = styled.h1`
  ${TextStyles}
`;
export const Quantity = styled.h1`
  ${TextStyles}
`;
export const Total = styled.h1`
  ${TextStyles}
`;
export const TableBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #1d1d1d;
`;
export const ImageSrc = styled.img`
  width: 70%;
  height: 100px;
  border-radius: 4px;

  @media screen and (max-width: 830px) {
    width: 100%;
  height: 80px;
  }
`;
export const QuantityDiv2 = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 830px) {
    gap: 5px;
  }
`;
export const RemoveIcon = styled(AiOutlineMinus)`
  width: 30px;
  height: 30px;
  margin-top: -5px;

  @media screen and (max-width: 830px) {
    width: 10px;
    height: 10px;
    margin-top: -10px;
  }
`;
export const AddIcon = styled(AiOutlinePlus)`
  width: 30px;
  height: 30px;
  margin-top: -10px;

  @media screen and (max-width: 830px) {
    width: 10px;
    height: 10px;
    margin-top: -8px;
  }
`;
export const DeleteIcon = styled(AiOutlineDelete)`
  width: 30px;
  height: 30px;
  text-align: center;
  margin: -15px auto 0 auto;

  @media screen and (max-width: 830px) {
    width: 20px;
    height: 20px;
    margin: -8px auto 0 auto;
  }
`;
