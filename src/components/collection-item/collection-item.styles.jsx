import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 100%;
  font-family: seren;
  border: 1px solid #ecececa8;
  padding: 10px;
  border-radius: 4px;

  &:hover {
    border: 2px solid #afafafa8;
  }

  @media screen and (max-width: 830px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 350px;
  margin-bottom: 5px;
  border-radius: 4px;

  @media screen and (max-width: 830px) {
    padding: 0;
    height: 250px;
  }
`;

export const AddButton = styled(CustomButton)`
  @media screen and (max-width: 830px) {
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  font-size: 18px;

  @media screen and (max-width: 830px) {
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterName = styled.span`
  width: 100%;
  text-align: left;
  margin: 15px 0 0 10px;
  font-size: 22px;
  font-weight: 800;

  @media screen and (max-width: 830px) {
    font-size: 15px;
    margin: 15px 0 0 5px;
  }
`;

export const FooterPrice = styled.span`
  width: 100%;
  padding: 10px;
  text-align: left;
  font-weight: 800;
`;
