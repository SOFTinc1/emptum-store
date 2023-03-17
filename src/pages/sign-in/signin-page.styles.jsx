import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0 150px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;
export const LoginTextContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SignInTittle = styled.div`
  font-family: agory;
  font-style: normal;
  font-size: 42px;
  line-height: 38px;
  margin-top: 36px;
  width: 100%;
  text-align: center;
  text-transform: capitalize;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 36px;
  }
`;
export const SignUpRedirect = styled.h2`
  text-transform: capitalize;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0 30px 0;
  cursor: pointer;
  font-family: seren;
  font-weight: 600;
  letter-spacing: 1px;

  @media screen and (max-width: 800px) {
    margin: 0;
    font-size: 18px;
  }
`;
export const Span = styled(Link)`
  cursor: pointer;
  margin: 0 10px;
  text-decoration: none;
`;