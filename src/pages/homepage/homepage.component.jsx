import React from "react";
import { HomepageContainer } from "./homepage.styles";
import Banner from "../../components/banner/banner.component";
import Directory from "../../components/directory/directory.component";
import Banner0 from "../../components/banner0/banner.component";
import Brands from "../../components/brands/brands.component";



const Homepage = () => (
  <HomepageContainer>
    <Banner0 />
    <Brands />
    <Banner />
    <Directory />
  </HomepageContainer>
);

export default Homepage;
