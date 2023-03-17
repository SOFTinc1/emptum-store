import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 0;
  width: 100%;

  @media screen and (max-width: 830px) {
    padding: 10px 0;
  }
`;
export const Upper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr;

  @media screen and (max-width: 1200px) {
    padding: 20px 0;
    display: block;
  }

  @media screen and (max-width: 800px) {
    padding: 10px 0;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;
export const Head = styled.h1`
  text-transform: capitalize;
  font-family: agory;
  letter-spacing: 0;
  font-size: 80px;
  justify-content: center;
  text-align: right;
  margin: 120px 0 0 0;

  @media screen and (max-width: 830px) {
    display: none;
  }
`;
export const H1 = styled.h1`
  text-transform: capitalize;
  font-family: agory;
  letter-spacing: 0;
  font-size: 80px;
  justify-content: center;
  text-align: left;
  margin: 120px 0 0 0;

  @media screen and (max-width: 830px) {
    font-size: 70px;
    margin: -400px 0 0 20px;
    color: #fff;
  }
`;
export const Image1 = styled.img`
  height: 100vh;
  margin: -95px 0 0 0;
  transition: background-image 0.7s ease-in-out;
  z-index: -9;

  @media screen and (max-width: 830px) {
    width: 100%;
    height: 100vh;
    margin: -110px 0 0 0;
  }

  @media screen and (max-width: 525px) {
  }
`;
export const NewsCon = styled.div`
  margin: -160px 0 0 0;
  z-index: 999;
  padding: 0 40px;
  position: relative;

  @media screen and (max-width: 830px) {
    margin: 50px 0 0 0;
    padding: 0;
    z-index: 999;
    border-top: 1px solid #000;
  }
`;
