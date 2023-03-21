import styled from "styled-components";

import { ReactComponent as HideSvg } from "../../assets/images/hide.svg";
import { ReactComponent as ShowSvg } from "../../assets/images/show.svg";

export const SignupContainer = styled.div`
  width: 467px;
  margin: 20px auto;
  font-family: seren;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: block;
    padding: 0 10px;
  }
`;
export const ButtonsBarContainer = styled.div`
  margin: -50px 0 0 0;

  @media screen and (max-width: 800px) {
    display: block;
    margin: -30px 0 0 0;
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
