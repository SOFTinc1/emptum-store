import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: #c60014;
  color: #fff;
  border: none;
  transition: all .7s ease-in-out;
  z-index: 99;


  &:hover {
    background: #000;
    color: #fff;
    transform: scale(1.0);
    font-weight: 800;
  }
`;

const InvertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all .7s ease-in-out; 

  &:hover {
    background: linear-gradient(45deg, #ff80ab, #82b1ff);
    color: white;
    border: none;
    transform: scale(1.0);
  }
`;

const GoogleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  transition: all .7s ease-in-out; 

  &:hover {
    background-color: linear-gradient(45deg, #ff80ab, #82b1ff);
    border: none;
    transform: scale(1.0);
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }

  return props.inverted ? InvertedButtonStyles : ButtonStyles;
};

export const CustomButtonContainer = styled.button`
  width: fit-content;
  letter-spacing: 3px;
  padding: 10px 20px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: seren;
  text-transform: capitalize;
  font-weight: 800;
  border-radius: 4px;

  ${getButtonStyles}

  @media screen and (max-width: 830px) {
    font-size: 14px;
  }
`;
