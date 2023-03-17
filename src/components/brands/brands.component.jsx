import {
  BrandsContainer,
  Head,
  Title,
  Row,
  Image,
  Top1,
  Top2,
  Top3,
  Top4,
  Top5,
  Top6,
  Top7,
} from "./brands.styles";
import Image1 from "../../assets/images/1.png";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.png";
import Image5 from "../../assets/images/5.png";
import Image6 from "../../assets/images/6.png";
import Image7 from "../../assets/images/7.png";

const Brands = () => (
  <BrandsContainer>
    <Head>featured</Head>
    <Title>top brands</Title>

    <Row>
      <Top1>
        <Image src={Image1} />
      </Top1>
      <Top2>
        <Image src={Image2} />
      </Top2>
      <Top3>
        <Image src={Image3} />
      </Top3>
      <Top4>
        <Image src={Image4} />
      </Top4>
      <Top5>
        <Image src={Image5} />
      </Top5>
      <Top6>
        <Image src={Image6} />
      </Top6>
      <Top7>
        <Image src={Image7} />
      </Top7>
    </Row>
  </BrandsContainer>
);

export default Brands;
