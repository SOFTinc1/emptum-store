import styled from "styled-components";

export const CartItemContainer = styled.div`
font-family: seren;
`;
export const CartItemProper = styled.div`
  background: transparent;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  height: 80px;
  margin: 15px 0;
  color: #000;
  border-radius: 5px;
`;
export const ImgSrc = styled.img`
  width: 30%;
  height: 100%;
  margin: 8px 0 0 5px;
  border-radius: 4px;
`;
export const ItemDetails = styled.div`
  width: 70%;
  // display: flex;
  // gap: 20px;
  align-items: center;
  padding: 0 30px;
`;
export const DetailsDiv = styled.div`
width: 1000px;
`;
export const Name = styled.span`
  font-size: 16px;
  margin: 8px 0 0 10px;
  height: 40px;
  font-weight: 600;
`;
export const Price = styled.span`
  font-size: 13px;
  height: 40px;
  width: 100%;
  font-weight: 800;
  padding: 0 0 0 10px;
`;
export const RemoveItem = styled.span`
  font-size: 13px;
  height: 40px;
  width: 100%;
  font-weight: 800;
  padding: 0 0 0 10px;
`;