import { BannerContainer, Upper, Head, H1, Image1, NewsCon } from "./banner.styles";
// import Header from "../navbar/header";
import Header from "../header/header.component";
import BannerImg from "../../assets/images/banner-img2.jpg";
import News from "../news/news.compponent";

const Banner0 = () => (
  <BannerContainer>
    <Header />
    <Upper>
      <Head>shop <br /> till</Head>
      <Image1 src={BannerImg} />
      <H1>you feel good.</H1>
    </Upper>
    <NewsCon>
      <News />
    </NewsCon>
  </BannerContainer>
);

export default Banner0;
