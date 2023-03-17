import React from "react";
import {
  CategoriesContainer,
  Head,
  Title1,
  Row,
  Col,
  Col1,
  Image,
  Position,
  Title,
  ButtonCon,
} from "./categories.style";
import Men from "../../assets/images/men.jpg";
import Women from "../../assets/images/women.jpg";
import Hat from "../../assets/images/hat.jpg";
import Sneakers from "../../assets/images/sneaker.jpg";
import Jacket from "../../assets/images/jacket.jpg";
import All from "../../assets/images/banner1.jpg";

// import { withRouter } from "./withRouter";
// import { Navigate } from "react-router-dom";

function Categories({ linkUrl }) {
//  const navigate = Navigate();
  return (
    <CategoriesContainer>
      <Head>categories</Head>
      <Title1>our shop sections</Title1>
      <Row>
        <Col>
          <Image src={Men} />
          <Position>
            <Title>explore our men's collection</Title>
            <ButtonCon
              // onClick={() => {
              //   navigate(linkUrl);
              // }}
            >
              shop
            </ButtonCon>
          </Position>
        </Col>

        <Col>
          <Image src={Women} />
          <Position>
            <Title>explore our women's collection</Title>
            <ButtonCon>shop</ButtonCon>
          </Position>
        </Col>

        <Col>
          <Image src={Sneakers} />
          <Position>
            <Title>explore our sneakers collection</Title>
            <ButtonCon>shop</ButtonCon>
          </Position>
        </Col>

        <Col1>
          <Image src={Jacket} />
          <Position>
            <Title>explore our jacket collection</Title>
            <ButtonCon>shop</ButtonCon>
          </Position>
        </Col1>

        <Col1>
          <Image src={Hat} />
          <Position>
            <Title>explore our hat collection</Title>
            <ButtonCon>shop</ButtonCon>
          </Position>
        </Col1>

        <Col1>
          <Image src={All} />
          <Position>
            <Title>explore all our collection</Title>
            <ButtonCon>shop</ButtonCon>
          </Position>
        </Col1>
      </Row>
    </CategoriesContainer>
  );
}

export default Categories;
// export default withRouter(Categories);
