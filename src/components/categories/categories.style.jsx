import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CategoriesContainer = styled.div`
  padding: 80px 40px 300px 40px;

  @media screen and (max-width: 830px) {
    padding: 80px 10px 200px 10px
  }
`;
export const Head = styled.h1`
  background-color: transparent;
  background-image: linear-gradient(
    90deg,
    #a3d5e7 -3.59%,
    #9074ed 53.05%,
    #ea3c5c 106.26%
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-transform: capitalize;
  font-family: agory;
  letter-spacing: 0;
  opacity: 0.1;
  font-size: 130px;

  @media screen and (max-width: 830px) {
    font-size: 60px;
  }
`;
export const Title1 = styled.h1`
  font-family: seren;
  text-align: left;
  font-size: 50px;
  padding: 0;
  margin: -100px 0 80px 10px;
  text-transform: capitalize;
  font-weight: 800;

  @media screen and (max-width: 830px) {
    margin: -50px 0 60px 5px;
    font-size: 30px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 830px) {
    display: block;
  }
`;
export const Col = styled.div`

@media screen and (max-width: 830px) {
  margin: 0 0 150px 0;
}
`;
export const Col1 = styled.div`
  margin: 140px 0 0 0;
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
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  margin: -125px 0 0 0;
  position: relative;
  text-align: left;
  font-weight: 800;

  @media screen and (max-width: 830px) {
    // font-size: 30px;
  }
  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`;
export const ButtonCon = styled(CustomButton)`
  margin: -287px 0 0 auto;
  position: relative;
  border-radius: 16px;

  @media screen and (max-width: 830px) {
    margin: -275px 0 0 auto;
  }
`;
