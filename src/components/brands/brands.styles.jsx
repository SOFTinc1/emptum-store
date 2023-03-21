import styled from "styled-components";

export const BrandsContainer = styled.div`
  padding: 0 0 0 40px ;
  width: 100%;
  overflow-x: hidden;
  margin: 300px 0 0 0;

  @media screen and (max-width: 830px) {
    padding: 30px 0 30px 10px;
    margin: 150px 0 0 0;
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
  font-size: 150px;

  @media screen and (max-width: 830px) {
    font-size: 70px;
  }
`;
export const Title = styled.h1`
  font-family: seren;
  text-align: left;
  font-size: 50px;
  padding: 0;
  margin: -120px 0 0 10px;
  text-transform: capitalize;
  font-weight: 800;

  @media screen and (max-width: 830px) {
    margin: -60px 0 0 5px;
    font-size: 30px;
  }
`;
export const Row = styled.div`
  display: flex;
  gap: 20px;
  margin: 60px 0 0 0;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
export const Image = styled.img`
  width: 150px;
`;
export const Top1 = styled.div`
  background: #ffe1f9;
  padding: 60px 40px;
  border-radius: 4px;
`;
export const Top2 = styled.div`
  background: #dceeee;
  padding: 60px 40px;
  border-radius: 4px;
`;
export const Top3 = styled.div`
  background: #ffea7f;
  padding: 60px 40px;
  border-radius: 4px;
`;
export const Top4 = styled.div`
  background: #f2f2f2;
  padding: 60px 40px;
  border-radius: 4px;
`;
export const Top5 = styled.div`
  background: #63b6be;
  padding: 60px 40px;
  border-radius: 4px;
`;
export const Top6 = styled.div`
  background: #ebe0ff;
  padding: 60px 40px;
  border-radius: 4px;
`;
export const Top7 = styled.div`
  background: #735bf9;
  padding: 60px 40px;
  border-radius: 4px;
`;
