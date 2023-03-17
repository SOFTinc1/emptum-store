import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  margin: 30px 0;
  padding: 0 1rem;
  width: 100%;
  background: #fff;

  @media screen and (max-width: 800px) {
    padding: 0 8px ;
  }
`;
export const Title = styled.div`
  font-size: 28px;
  margin: 25px 0;
  font-family: agory;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: lowercase;
`;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;

  @media screen and (max-width: 830px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
