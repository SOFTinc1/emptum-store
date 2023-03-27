import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  bottom: 90px;
  right: 40px;
  z-index: 9;
  transition: all 0.9s ease-in-out;
  transform: scale(1.1);
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-family: seren;

  @media screen and (max-width: 830px) {
    width: 85%;
  height: 440px;
  right: 20px;
  }

  button {
    margin-top: auto;
  }

`;
export const CartItems = styled.div`
  height: 330px;
  display: flex;
  flex-direction: column;
  overflow-x: none;
  overflow-y: scroll;
  font-family: syne;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
  text-transform: capitalize;
  font-family: seren;
  font-weight: 800;
  letter-spacing: 1px;
`;
