import React from "react";
import { HomepageContainer } from "./homepage.styles";
import Banner from "../../components/banner/banner.component";
import Directory from "../../components/directory/directory.component";
import Details from "../../components/details/details.component";
import Banner0 from "../../components/banner0/banner.component";
import Brands from "../../components/brands/brands.component";
import Categories from "../../components/categories/categories";



const Homepage = () => (
  <HomepageContainer>
    <Banner0 />
    <Brands />
    <Banner />
    <Directory />
    {/* <Categories /> */}
    {/* <Details /> */}
  </HomepageContainer>
);

export default Homepage;
