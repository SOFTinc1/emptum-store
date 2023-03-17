import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpContainer = styled.div`
  width: 100%;
  margin: -10px auto 0 auto;
  padding: 0 0 150px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 0 20px 95px 20px;
  }
`;

export const SignUpTextContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SignUpTittle = styled.div`
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
    margin-top: 56px;
  }
`;
export const SignUpRedirect = styled.h2`
  text-transform: capitalize;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 30px 0;
  cursor: pointer;

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
