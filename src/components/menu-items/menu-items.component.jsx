import React from "react";
import { withRouter } from "../directory/withRouter";
import {
  CategoriesContainer,
  Image,
  Position,
  Title,
  ButtonCon,
} from "./menu-items.style";

const MenuItem = ({ title, imageUrl, navigate, linkUrl }) => (
  <CategoriesContainer>
    <Image src={imageUrl} />
    <Position>
      <Title>explore our {title} collection</Title>
      <ButtonCon
        onClick={() => {
          navigate(linkUrl);
        }}
      >
        shop
      </ButtonCon>
    </Position>
  </CategoriesContainer>
);

export default withRouter(MenuItem);
