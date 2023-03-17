import styled from "styled-components";

export const NewsContainer = styled.div`
  margin: 0;
  padding: 10px 0;
  border-top: 1px solid #1d1d1d;
  border-bottom: 1px solid #1d1d1d;
  background: #eaddff21;
  z-index: 999;

  @media screen and (max-width: 830px) {
    width: 100%;
    z-index: 9;
  }
`;
export const H1 = styled.h1`
  font-size: 16px;
  font-weight: 800;
  font-family: seren;
  color: #000;
  margin: auto 0;
  letter-spacing: 3px;
  line-height: 22px;
`;
export const GreenSpan = styled.span`
  color: #c60014;
  font-weight: 800;
`;
