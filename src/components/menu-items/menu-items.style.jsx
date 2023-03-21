import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CategoriesContainer = styled.div`
  padding: 0 0 130px 0;

  @media screen and (max-width: 830px) {
    padding: 0 10px 140px 10px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 16px;

  @media screen and (max-width: 830px) {
  }
`;
export const Position = styled.div`
  padding: 0 7px;
`;
export const Title = styled.h1`
  font-family: seren;
  font-size: 32px;
  text-transform: capitalize;
  letter-spacing: 3px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 16px;
  margin: -125px 0 0 0;
  position: relative;
  text-align: left;
  font-weight: 800;
  color: #fff;

  @media screen and (max-width: 1024px) {
    font-size: 23.5px;
  }
  // @media screen and (max-width: 830px) {
  //   font-size: 30px;
  // }
  @media screen and (max-width: 830px) {
    font-size: 28px;
  }
`;
export const ButtonCon = styled(CustomButton)`
  margin: -287px 0 0 auto;
  position: relative;
  border-radius: 16px;

  @media screen and (max-width: 1024px) {
    margin: -255px 0 0 auto;
  }
  @media screen and (max-width: 830px) {
    margin: -275px 0 0 auto;
  }
`;
