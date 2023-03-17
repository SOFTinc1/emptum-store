import React from "react";
import Marquee from "react-fast-marquee";
import { NewsContainer, H1, GreenSpan } from "./news.style";

function News() {
  return (
    <NewsContainer>
      <Marquee gradient={false} speed={100}>
        <H1>
          Welcome to <GreenSpan>Boitla</GreenSpan> Your best stop for quality <GreenSpan>images.</GreenSpan> <GreenSpan>Boitla</GreenSpan> is more than a platform but a <GreenSpan>community.</GreenSpan> So, <GreenSpan>DIVE IN.</GreenSpan> 
        </H1>
      </Marquee>
    </NewsContainer>
  );
}

export default News;
