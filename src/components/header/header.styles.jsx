import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  // background: #fff;
  // border-top: 1px solid #1d1d1d;
  // border-bottom: 1px solid #1d1d1d;
  margin: 20px 0 0 0;

  @media screen and (max-width: 830px) {
    margin: 0;
    height: 60px;
    align-items: center;
    border: none;
    position: relative;
  }
`;
export const LogoImg = styled.img`
  padding: 0;
  width: 150%;
  cursor: pointer;
  margin: 0 auto;

  @media screen and (max-width: 830px) {
    margin: 0 0 0 0;
    width: 80px;
  }
`;
export const Option = styled(Link)`
  padding: 0;
  align-items: center;
  cursor: pointer;
  font-family: seren;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.07rem;
  margin: 0 20px;
  color: #000;

  @media screen and (max-width: 830px) {
    font-size: 24px;
    padding: 0 0 5px 0;
  }
`;
export const Location = styled.p`
  font-family: seren;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 3px;
  cursor: pointer;
  margin: 0;

  @media screen and (max-width: 830px) {
    font-size: 24px;
    padding: 30px 0;
  }
`;
export const ButtonCon = styled(CustomButton)`
  @media screen and (max-width: 830px) {
    font-size: 12px;
    letter-spacing: 1px;
  }
`;
export const OptionDiv = styled.div`
  text-transform: capitalize;
  font-family: seren;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 3px;
  cursor: pointer;
  color: #000;
  // margin: 40px 0 0 0;
`;
