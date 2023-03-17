import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

import { ReactComponent as HideSvg } from "../../assets/images/hide.svg";
import { ReactComponent as ShowSvg } from "../../assets/images/show.svg";

export const SigninContainer = styled.div`
  width: 467px;
  margin: 20px auto;
  font-family: seren;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    padding: 0 20px;
  }
`;
export const GoogleButton = styled.div`
  display: flex;
  gap: 20px;
  border: 1px solid #1d1d1d;
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    gap: 5px;
  }
`;
export const Icon = styled(FcGoogle)`
  width: 30px;
  height: 30px;
`;
export const GoogleText = styled.h1`
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-size: 22px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    margin: 6px 0 0 0;
  }
`;
export const Or = styled.h1`
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-size: 22px;
  text-align: center;
  margin: 40px 0;
`;
export const ButtonsBarContainer = styled.div`
  margin: -40px 0 30px 0;

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 100%;
  }
`;

export const ShowIcon = styled(ShowSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 88px;

  @media screen and (max-width: 525px) {
    left: 330px;
    bottom: 90px;
  }

  @media screen and (max-width: 400px) {
    left: 300px;
    bottom: 88px;
  }
`;
export const HideIcon = styled(HideSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 88px;

  @media screen and (max-width: 525px) {
    left: 330px;
    bottom: 90px;
  }

  @media screen and (max-width: 400px) {
    left: 300px;
    bottom: 88px;
  }
`;
