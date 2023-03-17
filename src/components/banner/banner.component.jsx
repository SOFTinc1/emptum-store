import {
  BannerContainer,
  Upper,
  Head,
  H1,
  ImageRow,
  Image1,
} from "./banner.styles";

const Banner = () => (
  <BannerContainer>
    {/* <DarkMode /> */}
    <Upper>
      <Head>shop</Head>
      <H1>there's good inside.</H1>
    </Upper>
    <ImageRow>
      <Image1></Image1>
    </ImageRow>
  </BannerContainer>
);

export default Banner;
