import styled from "styled-components";
import bannerImg from "../../assets/images/banner1.jpg";
import bannerImgMobile from "../../assets/images/banner1-mobile.jpg";

export const BannerContainer = styled.div`
  padding: 0;
  width: 100%;
  margin: 150px 0 0 0;

  @media screen and (max-width: 800px) {
    padding: 0;
    margin: 80px 0 0 0;
  }
`;
export const Upper = styled.div`
@media screen and (max-width: 1200px) {
  padding: 20px 0;
}

@media screen and (max-width: 800px) {
  padding: 10px 0;
}

@media screen and (max-width: 500px) {
  padding: 0;
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
  font-family: agory;
  letter-spacing: 0;
  margin: 30px 0 0 0;
  opacity: 0.1;
  text-transform: capitalize;
  font-size: 150px;
  text-align: left;
  padding: 0 40px;

  @media screen and (max-width: 1200px) {
    font-size: 250px;
  }

  @media screen and (max-width: 830px) {
    width: 100%;
    font-size: 180px;
    text-align: left;
    margin: 0;
    margin: -45px 0 0 0;
    padding: 0 10px;
  }

  @media screen and (max-width: 525px) {
    width: 100%;
    font-size: 89px;
    padding: 0 10px;
  }
`;
export const H1 = styled.h1`
  font-family: seren;
  text-align: left;
  font-size: 50px;
  padding: 0;
  margin: -80px 0 50px 10px;
  padding: 0 40px;
  font-weight: 800;
  text-transform: capitalize;

  @media screen and (max-width: 830px) {
    margin: -60px 0 30px 0;
    width: 100%;
    font-size: 30px;
    padding: 0 10px;
  }
`;
export const ImageRow = styled.div``;
export const Image1 = styled.div`
  width: 100%;
  height: 300px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.7s ease-in-out;
  background-image: url(${bannerImg});

  @media screen and (max-width: 2600px) {
    width: 100%;
    height: 800px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 900px;
    background-image: url(${bannerImgMobile});
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 670px;
    background-image: url(${bannerImgMobile});
  }

  @media screen and (max-width: 525px) {
    width: 100%;
    height: 350px;
    background-image: url(${bannerImgMobile});
  }
`;